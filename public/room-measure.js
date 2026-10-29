/* Room measuring for Design › Quick survey (Donal 29/10/2026). Loaded the first time an installer taps a measure button.
   - RoomScan.read(name, bytes): room length, width and height from a scan exported by the free iPhone "3d Scanner App"
     (LiDAR). Reads GLB/glTF and OBJ (the 3D model, gives the height too) and DXF (the floor plan, length and width only).
     The scan's walls set the room's square: the wall direction is found from the model, the room is turned square to it,
     and the size is taken between the 1st and 99th percentile of the points, so a few stray points through a doorway or
     window don't stretch the room.
   - RoomAR.supported() / RoomAR.measure(): length and width measured with the phone camera (WebXR AR, Chrome on Android).
     Two taps across the room for the length, two for the width, read along the floor. */
(function (g) {
  "use strict";

  /* ---------- Room size from points (x, y up, z) and, for a model, its triangles ---------- */
  const pct = (a, p) => a[Math.min(a.length - 1, Math.max(0, Math.round(p * (a.length - 1))))];
  const r2 = x => Math.round(x * 100) / 100;

  /* The walls' direction (radians, 0 to 90°): wall faces stand upright, so their normals lie flat. Each one votes for its
     angle folded into 0 to 90°, weighted by its area; the busiest degree (smoothed over its neighbours) wins. */
  function wallAngleFromFaces(P, F) {
    const bins = new Float64Array(90);
    for (let i = 0; i < F.length; i += 3) {
      const a = F[i] * 3, b = F[i + 1] * 3, c = F[i + 2] * 3;
      const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2];
      const vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
      const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      const flat = Math.hypot(nx, nz);
      if (!(flat > 0) || Math.abs(ny) > 0.3 * flat) continue;
      bins[foldDeg(Math.atan2(nz, nx))] += flat;
    }
    return peak(bins);
  }
  /* Same for a floor plan: each wall line votes with its length. */
  function wallAngleFromLines(L) {
    const bins = new Float64Array(90);
    for (let i = 0; i < L.length; i += 4) {
      const dx = L[i + 2] - L[i], dz = L[i + 3] - L[i + 1], len = Math.hypot(dx, dz);
      if (len > 0) bins[foldDeg(Math.atan2(dz, dx))] += len;
    }
    return peak(bins);
  }
  const foldDeg = a => { let d = Math.round(a * 180 / Math.PI) % 90; if (d < 0) d += 90; return d % 90; };
  function peak(bins) {
    let best = -1, at = 0;
    for (let d = 0; d < 90; d++) {
      const s = bins[(d + 89) % 90] + 2 * bins[d] + bins[(d + 1) % 90];
      if (s > best) { best = s; at = d; }
    }
    return best > 0 ? at * Math.PI / 180 : null;
  }
  /* No faces or lines to go by (a bare point cloud): the long axis of the points. */
  function pcaAngle(X, Z) {
    let mx = 0, mz = 0; const n = X.length;
    for (let i = 0; i < n; i++) { mx += X[i]; mz += Z[i]; }
    mx /= n; mz /= n;
    let sxx = 0, szz = 0, sxz = 0;
    for (let i = 0; i < n; i++) { const dx = X[i] - mx, dz = Z[i] - mz; sxx += dx * dx; szz += dz * dz; sxz += dx * dz; }
    return 0.5 * Math.atan2(2 * sxz, sxx - szz);
  }
  function boxOf(X, Z, Y, angle) {
    const c = Math.cos(angle), s = Math.sin(angle), n = X.length, u = new Float64Array(n), v = new Float64Array(n);
    for (let i = 0; i < n; i++) { u[i] = X[i] * c + Z[i] * s; v[i] = -X[i] * s + Z[i] * c; }
    u.sort(); v.sort();
    const a = pct(u, 0.99) - pct(u, 0.01), b = pct(v, 0.99) - pct(v, 0.01);
    let h = null;
    if (Y) { const y = Float64Array.from(Y).sort(); h = r2(pct(y, 0.99) - pct(y, 0.01)); }
    return { length: r2(Math.max(a, b)), width: r2(Math.min(a, b)), height: h };
  }
  function roomFromMesh(P, F) {
    const n = P.length / 3;
    if (n < 4) throw new Error("There are no points in this scan.");
    const X = new Float64Array(n), Y = new Float64Array(n), Z = new Float64Array(n);
    for (let i = 0; i < n; i++) { X[i] = P[3 * i]; Y[i] = P[3 * i + 1]; Z[i] = P[3 * i + 2]; }
    let angle = F && F.length ? wallAngleFromFaces(P, F) : null;
    if (angle == null) angle = pcaAngle(X, Z);
    return boxOf(X, Z, Y, angle);
  }

  /* ---------- glTF / GLB ---------- */
  const mat4 = () => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  function mul(a, b) { // column-major 4×4
    const o = new Array(16);
    for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
      let s = 0; for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k]; o[c * 4 + r] = s;
    }
    return o;
  }
  function trs(node) {
    if (node.matrix) return node.matrix.slice();
    const [tx, ty, tz] = node.translation || [0, 0, 0], [x, y, z, w] = node.rotation || [0, 0, 0, 1], [sx, sy, sz] = node.scale || [1, 1, 1];
    return [(1 - 2 * (y * y + z * z)) * sx, (2 * (x * y + z * w)) * sx, (2 * (x * z - y * w)) * sx, 0,
      (2 * (x * y - z * w)) * sy, (1 - 2 * (x * x + z * z)) * sy, (2 * (y * z + x * w)) * sy, 0,
      (2 * (x * z + y * w)) * sz, (2 * (y * z - x * w)) * sz, (1 - 2 * (x * x + y * y)) * sz, 0, tx, ty, tz, 1];
  }
  const COMP = { 5120: [Int8Array, 1], 5121: [Uint8Array, 1], 5122: [Int16Array, 2], 5123: [Uint16Array, 2], 5125: [Uint32Array, 4], 5126: [Float32Array, 4] };
  const NCOMP = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 };
  function readAccessor(gl, bufs, idx) {
    const acc = gl.accessors[idx], view = gl.bufferViews[acc.bufferView];
    if (!view) throw new Error("This model uses a layout the app can't read. Export it as GLB or OBJ.");
    const [T, size] = COMP[acc.componentType], nc = NCOMP[acc.type], buf = bufs[view.buffer];
    const start = (view.byteOffset || 0) + (acc.byteOffset || 0), stride = view.byteStride || size * nc;
    const dv = new DataView(buf.buffer, buf.byteOffset), out = new (T === Float32Array ? Float32Array : Uint32Array)(acc.count * nc);
    const get = { 5120: "getInt8", 5121: "getUint8", 5122: "getInt16", 5123: "getUint16", 5125: "getUint32", 5126: "getFloat32" }[acc.componentType];
    for (let i = 0; i < acc.count; i++) for (let k = 0; k < nc; k++) out[i * nc + k] = dv[get](start + i * stride + k * size, true);
    return out;
  }
  function b64(s) {
    if (typeof atob === "function") { const t = atob(s), o = new Uint8Array(t.length); for (let i = 0; i < t.length; i++) o[i] = t.charCodeAt(i); return o; }
    return new Uint8Array(Buffer.from(s, "base64"));
  }
  function readGltf(gl, bin) {
    const req = gl.extensionsRequired || [];
    if (req.some(e => /draco|meshopt/i.test(e))) throw new Error("This model is compressed. Export it again as GLB without compression, or as OBJ.");
    const bufs = (gl.buffers || []).map((b, i) => {
      if (b.uri && b.uri.startsWith("data:")) return b64(b.uri.slice(b.uri.indexOf(",") + 1));
      if (!b.uri && i === 0 && bin) return bin;
      throw new Error("This glTF keeps its data in a separate file. Export it as GLB (one file) instead.");
    });
    const P = [], F = [];
    const walk = (ni, parent) => {
      const node = gl.nodes[ni], m = mul(parent, trs(node));
      if (node.mesh != null) for (const prim of gl.meshes[node.mesh].primitives) {
        if (prim.mode != null && prim.mode !== 4) continue;
        if (prim.attributes.POSITION == null) continue;
        const pos = readAccessor(gl, bufs, prim.attributes.POSITION), base = P.length / 3;
        for (let i = 0; i < pos.length; i += 3) {
          const x = pos[i], y = pos[i + 1], z = pos[i + 2];
          P.push(m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]);
        }
        if (prim.indices != null) { const ix = readAccessor(gl, bufs, prim.indices); for (let i = 0; i < ix.length; i++) F.push(base + ix[i]); }
        else for (let i = 0; i < pos.length / 3; i++) F.push(base + i);
      }
      (node.children || []).forEach(c => walk(c, m));
    };
    const scene = gl.scenes ? gl.scenes[gl.scene || 0] : { nodes: (gl.nodes || []).map((_, i) => i) };
    scene.nodes.forEach(n => walk(n, mat4()));
    return roomFromMesh(Float64Array.from(P), Uint32Array.from(F));
  }
  function readGlb(bytes) {
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), td = new TextDecoder();
    let off = 12, json = null, bin = null;
    while (off + 8 <= bytes.byteLength) {
      const len = dv.getUint32(off, true), type = dv.getUint32(off + 4, true), chunk = bytes.subarray(off + 8, off + 8 + len);
      if (type === 0x4E4F534A) json = JSON.parse(td.decode(chunk)); else if (type === 0x004E4942) bin = chunk;
      off += 8 + len;
    }
    if (!json) throw new Error("This GLB file looks damaged.");
    return readGltf(json, bin);
  }

  /* ---------- OBJ ---------- */
  function readObj(text) {
    const P = [], F = [];
    for (const line of text.split("\n")) {
      if (line.startsWith("v ")) { const p = line.trim().split(/\s+/); P.push(+p[1], +p[2], +p[3]); }
      else if (line.startsWith("f ")) {
        const n = P.length / 3, ix = line.trim().split(/\s+/).slice(1).map(t => { const k = parseInt(t, 10); return k < 0 ? n + k : k - 1; });
        for (let i = 1; i + 1 < ix.length; i++) F.push(ix[0], ix[i], ix[i + 1]);
      }
    }
    return roomFromMesh(Float64Array.from(P), Uint32Array.from(F));
  }

  /* ---------- DXF floor plan (length and width; no height in a plan) ---------- */
  const DXF_UNITS = { 1: 0.0254, 2: 0.3048, 4: 0.001, 5: 0.01, 6: 1 };
  function readDxf(text) {
    const t = text.split(/\r?\n/), pairs = [];
    for (let i = 0; i + 1 < t.length; i += 2) pairs.push([parseInt(t[i], 10), t[i + 1].trim()]);
    let unit = null; const L = [];
    for (let i = 0; i < pairs.length; i++) {
      const [c, v] = pairs[i];
      if (c === 9 && v === "$INSUNITS" && pairs[i + 1]) unit = DXF_UNITS[+pairs[i + 1][1]] || null;
      if (c !== 0) continue;
      if (v === "LINE") {
        const e = {}; for (let j = i + 1; j < pairs.length && pairs[j][0] !== 0; j++) e[pairs[j][0]] = +pairs[j][1];
        L.push(e[10], e[20], e[11], e[21]);
      } else if (v === "LWPOLYLINE" || v === "POLYLINE") {
        const pts = []; let closed = false, j = i + 1;
        const take = () => { for (; j < pairs.length && pairs[j][0] !== 0; j++) {
          const [cc, vv] = pairs[j];
          if (cc === 10) pts.push([+vv, 0]); else if (cc === 20 && pts.length) pts[pts.length - 1][1] = +vv; else if (cc === 70) closed = closed || (+vv & 1) === 1;
        } };
        take();
        if (v === "POLYLINE") while (j < pairs.length && pairs[j][1] === "VERTEX") { j++; take(); }
        for (let k = 0; k + 1 < pts.length; k++) L.push(pts[k][0], pts[k][1], pts[k + 1][0], pts[k + 1][1]);
        if (closed && pts.length > 2) L.push(pts[pts.length - 1][0], pts[pts.length - 1][1], pts[0][0], pts[0][1]);
      }
    }
    const clean = [];
    for (let i = 0; i + 3 < L.length; i += 4) if ([0, 1, 2, 3].every(k => Number.isFinite(L[i + k]))) clean.push(L[i], L[i + 1], L[i + 2], L[i + 3]);
    if (clean.length < 8) throw new Error("No walls found in this floor plan.");
    let X = [], Z = [];
    for (let i = 0; i < clean.length; i += 2) { X.push(clean[i]); Z.push(clean[i + 1]); }
    const ang = wallAngleFromLines(clean) ?? pcaAngle(X, Z);
    /* Use the plan's own units, else guess from the size: a room is a few metres, so thousands means mm. */
    if (!unit) { const span = Math.max(...X) - Math.min(...X); unit = span > 200 ? 0.001 : span > 40 ? 0.01 : 1; }
    X = X.map(x => x * unit); Z = Z.map(z => z * unit);
    return { ...boxOf(X, Z, null, ang), plan: true };
  }

  function read(name, bytes) {
    const ext = (name.match(/\.([a-z0-9]+)$/i) || [])[1]?.toLowerCase();
    const text = () => new TextDecoder().decode(bytes);
    let r;
    if (ext === "glb" || (bytes[0] === 0x67 && bytes[1] === 0x6C && bytes[2] === 0x54 && bytes[3] === 0x46)) r = readGlb(bytes);
    else if (ext === "gltf") r = readGltf(JSON.parse(text()), null);
    else if (ext === "obj") r = readObj(text());
    else if (ext === "dxf") r = readDxf(text());
    else if (ext === "usdz" || ext === "usd" || ext === "zip") throw new Error("USDZ files can't be read here. In 3d Scanner App, share the scan as GLB or OBJ (or the floor plan as DXF).");
    else throw new Error("Pick a GLB, OBJ or DXF file exported from 3d Scanner App.");
    if (!(r.length > 0.3 && r.width > 0.3) || r.length > 40) throw new Error("That scan doesn't look like one room. Scan one room at a time.");
    return r;
  }

  /* ---------- Camera measuring (WebXR AR, Chrome on Android) ---------- */
  async function supported() {
    try { return !!(g.navigator && navigator.xr && await navigator.xr.isSessionSupported("immersive-ar")); } catch { return false; }
  }
  /* Project a world point to overlay pixels with the view's projection × inverse view matrix (column-major). */
  function project(pm, vm, p, W, H) {
    const m = mul(pm, Array.from(vm));
    const x = m[0] * p[0] + m[4] * p[1] + m[8] * p[2] + m[12], y = m[1] * p[0] + m[5] * p[1] + m[9] * p[2] + m[13];
    const w = m[3] * p[0] + m[7] * p[1] + m[11] * p[2] + m[15];
    if (w <= 0) return null;
    return [(x / w + 1) / 2 * W, (1 - y / w) / 2 * H];
  }
  const flat = (a, b) => Math.hypot(b[0] - a[0], b[2] - a[2]);
  const STEPS = ["length", "width"];

  /* Opens the camera, lets the installer place four points and resolves {length, width} in metres, or null if cancelled. */
  function measure(roomName) {
    return new Promise(async (resolve, reject) => {
      const ov = document.createElement("div");
      ov.className = "ar-ov";
      ov.innerHTML = `<canvas class="ar-cv"></canvas>
        <div class="ar-top"><b class="ar-title"></b><div class="ar-msg">Starting the camera…</div></div>
        <div class="ar-read"></div>
        <div class="ar-bar"><button class="ar-b sec" data-a="cancel">Cancel</button><button class="ar-b sec" data-a="undo">Undo</button><button class="ar-b" data-a="add">Add point</button></div>`;
      document.body.append(ov);
      const cv = ov.querySelector("canvas"), cx = cv.getContext("2d"), msg = ov.querySelector(".ar-msg"), read = ov.querySelector(".ar-read");
      const title = ov.querySelector(".ar-title");
      let session, gl, local, hitSrc, reticle = null, pts = [], done = {}, finished = false;
      const step = () => STEPS[Math.floor(pts.length / 2)];
      const say = () => {
        const s = step();
        title.textContent = (roomName ? roomName + ": " : "") + (s ? `measure the ${s}` : "done");
        if (!s) return;
        msg.textContent = pts.length % 2 === 0
          ? `Aim the dot at the floor against one wall (at the skirting) and tap Add point.`
          : `Now aim at the floor against the opposite wall and tap Add point.`;
      };
      const end = val => { if (finished) return; finished = true; resolve(val); session?.end().catch(() => {}); ov.remove(); };
      ov.querySelectorAll("[data-a]").forEach(b => {
        b.addEventListener("beforexrselect", e => e.preventDefault());
        b.onclick = () => {
          const a = b.dataset.a;
          if (a === "cancel") return end(null);
          if (a === "undo") { pts.pop(); delete done[STEPS[Math.floor(pts.length / 2)]]; say(); return; }
          if (!reticle) { msg.textContent = "No floor found yet. Move the phone slowly over the floor."; return; }
          pts.push(reticle.slice());
          if (pts.length % 2 === 0) done[STEPS[pts.length / 2 - 1]] = Math.round(flat(pts[pts.length - 2], pts[pts.length - 1]) * 100) / 100;
          if (pts.length === 4) { say(); setTimeout(() => end({ length: Math.max(done.length, done.width), width: Math.min(done.length, done.width) }), 600); return; }
          say();
        };
      });
      ov.addEventListener("beforexrselect", e => e.preventDefault());
      /* Inside another app's browser (e.g. a link opened from a chat app) Chrome can ask for the camera and then never
         start AR, so after a few seconds say how to get out of it. */
      const slow = setTimeout(() => { if (!session && !finished) msg.innerHTML = "The camera hasn't started. Camera measuring works in <b>Chrome</b>: if this page opened inside another app or in Samsung Internet, copy the link into Chrome (or use the app from your home screen, added from Chrome) and try again. Tap Cancel to go back."; }, 6000);
      try {
        session = await navigator.xr.requestSession("immersive-ar", { requiredFeatures: ["hit-test", "dom-overlay"], domOverlay: { root: ov } });
      } catch (e) {
        clearTimeout(slow);
        if (finished) return;
        finished = true; ov.remove();
        return reject(new Error(`The camera couldn't start measuring (${e && (e.name || e.message) || "error"}). Check Chrome has camera permission for this site, Google Play Services for AR is installed, and tap the button again.`));
      }
      clearTimeout(slow);
      if (finished) { session.end().catch(() => {}); return; }
      msg.textContent = "Move the phone slowly so it can find the floor.";
      session.addEventListener("end", () => end(null));
      try {
        const c = document.createElement("canvas");
        gl = c.getContext("webgl", { xrCompatible: true, alpha: true });
        session.updateRenderState({ baseLayer: new XRWebGLLayer(session, gl, { alpha: true }) });
        local = await session.requestReferenceSpace("local");
        hitSrc = await session.requestHitTestSource({ space: await session.requestReferenceSpace("viewer") });
      } catch (e) {
        finished = true; session.end().catch(() => {}); ov.remove();
        return reject(new Error(`The camera started but couldn't set up measuring (${e && (e.name || e.message) || "error"}). Tap the button again.`));
      }
      say();
      const frame = (t, f) => {
        if (finished) return;
        session.requestAnimationFrame(frame);
        const layer = session.renderState.baseLayer;
        gl.bindFramebuffer(gl.FRAMEBUFFER, layer.framebuffer); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
        const pose = f.getViewerPose(local), W = cv.width = ov.clientWidth * devicePixelRatio, H = cv.height = ov.clientHeight * devicePixelRatio;
        cx.clearRect(0, 0, W, H);
        if (!pose) return;
        const hits = f.getHitTestResults(hitSrc), hp = hits.length && hits[0].getPose(local);
        reticle = hp ? [hp.transform.position.x, hp.transform.position.y, hp.transform.position.z] : null;
        const view = pose.views[0], pr = p => project(view.projectionMatrix, view.transform.inverse.matrix, p, W, H);
        const d = devicePixelRatio, line = (a, b, col) => { const A = pr(a), B = pr(b); if (!A || !B) return;
          cx.strokeStyle = col; cx.lineWidth = 4 * d; cx.beginPath(); cx.moveTo(A[0], A[1]); cx.lineTo(B[0], B[1]); cx.stroke(); };
        const dot = (p, col, r) => { const A = pr(p); if (!A) return; cx.fillStyle = col; cx.beginPath(); cx.arc(A[0], A[1], r * d, 0, 7); cx.fill();
          cx.strokeStyle = "#fff"; cx.lineWidth = 2 * d; cx.stroke(); };
        for (let i = 0; i + 1 < pts.length; i += 2) line(pts[i], pts[i + 1], "#00A9E0");
        if (pts.length % 2 === 1 && reticle) line(pts[pts.length - 1], reticle, "#ffffff");
        pts.forEach(p => dot(p, "#00A9E0", 7));
        if (reticle) dot(reticle, "rgba(255,255,255,.85)", 10);
        const live = pts.length % 2 === 1 && reticle ? `${step()}: ${flat(pts[pts.length - 1], reticle).toFixed(2)} m` : "";
        read.innerHTML = [done.length != null ? `Length ${done.length.toFixed(2)} m` : "", done.width != null ? `Width ${done.width.toFixed(2)} m` : "", live].filter(Boolean).join("<br>");
      };
      session.requestAnimationFrame(frame);
    });
  }

  g.RoomScan = { read, roomFromMesh };
  g.RoomAR = { supported, measure };
})(typeof window !== "undefined" ? window : globalThis);
