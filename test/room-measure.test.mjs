// Room scan import (public/room-measure.js): room sizes from GLB, OBJ and DXF scans like those 3d Scanner App exports.
// The test rooms are made here: a 4.20 × 3.60 m room, 2.40 m high, turned 23° off square, with a scrap of hall seen
// through the doorway that shouldn't count. Run with `npm test`.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const ctx = { TextDecoder, Buffer, Math, Float64Array, Float32Array, Uint32Array, Uint8Array, DataView, JSON, Number, Error, Array };
vm.runInNewContext(readFileSync(new URL("../public/room-measure.js", import.meta.url), "utf8"), ctx);
const { RoomScan } = ctx;

// A box room as triangles: subdivided walls, floor and ceiling (a scan has many small faces), then rotated about the vertical.
function room(L, W, H, deg, offset = [5, 0, -2]) {
  const P = [], F = [];
  const quad = (o, u, v, n) => { // grid of n×n quads from corner o along u and v
    const base = P.length / 3;
    for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) P.push(o[0] + u[0] * i / n + v[0] * j / n, o[1] + u[1] * i / n + v[1] * j / n, o[2] + u[2] * i / n + v[2] * j / n);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const a = base + i * (n + 1) + j, b = a + n + 1; F.push(a, b, a + 1, a + 1, b, b + 1); }
  };
  quad([0, 0, 0], [L, 0, 0], [0, H, 0], 12); quad([0, 0, W], [L, 0, 0], [0, H, 0], 12);
  quad([0, 0, 0], [0, 0, W], [0, H, 0], 12); quad([L, 0, 0], [0, 0, W], [0, H, 0], 12);
  quad([0, 0, 0], [L, 0, 0], [0, 0, W], 12); quad([0, H, 0], [L, 0, 0], [0, 0, W], 12);
  // scrap of hall floor through the doorway: 1 m beyond the wall, a few faces
  quad([1, 0, W], [0.8, 0, 0], [0, 0, 1], 2);
  const a = deg * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
  for (let i = 0; i < P.length; i += 3) { const x = P[i], z = P[i + 2]; P[i] = x * c - z * s + offset[0]; P[i + 1] += offset[1]; P[i + 2] = x * s + z * c + offset[2]; }
  return { P, F };
}

const close = (got, want, tol, what) => assert.ok(Math.abs(got - want) <= tol, `${what}: got ${got}, want ${want} ± ${tol}`);
const check = (r, h = true) => {
  close(r.length, 4.2, 0.05, "length"); close(r.width, 3.6, 0.05, "width");
  if (h) close(r.height, 2.4, 0.05, "height");
};

test("OBJ scan gives the room length, width and height, square to the walls", () => {
  const { P, F } = room(4.2, 3.6, 2.4, 23);
  let obj = "# 3d Scanner App\n";
  for (let i = 0; i < P.length; i += 3) obj += `v ${P[i]} ${P[i + 1]} ${P[i + 2]}\n`;
  for (let i = 0; i < F.length; i += 3) obj += `f ${F[i] + 1}/1/1 ${F[i + 1] + 1}/1/1 ${F[i + 2] + 1}/1/1\n`;
  check(RoomScan.read("Bedroom.obj", new TextEncoder().encode(obj)));
});

test("GLB scan, with a node transform, gives the same room", () => {
  const { P, F } = room(4.2, 3.6, 2.4, -61, [0, 0, 0]);
  const pos = new Float32Array(P), idx = new Uint32Array(F);
  const bin = new Uint8Array(pos.byteLength + idx.byteLength);
  bin.set(new Uint8Array(pos.buffer), 0); bin.set(new Uint8Array(idx.buffer), pos.byteLength);
  const json = {
    asset: { version: "2.0" }, scene: 0, scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0, translation: [2, -1.3, 7] }], meshes: [{ primitives: [{ attributes: { POSITION: 0 }, indices: 1 }] }],
    buffers: [{ byteLength: bin.byteLength }],
    bufferViews: [{ buffer: 0, byteOffset: 0, byteLength: pos.byteLength }, { buffer: 0, byteOffset: pos.byteLength, byteLength: idx.byteLength }],
    accessors: [{ bufferView: 0, componentType: 5126, count: P.length / 3, type: "VEC3" }, { bufferView: 1, componentType: 5125, count: F.length, type: "SCALAR" }],
  };
  let js = new TextEncoder().encode(JSON.stringify(json));
  const jpad = (4 - js.length % 4) % 4; js = new Uint8Array([...js, ...Array(jpad).fill(0x20)]);
  const total = 12 + 8 + js.length + 8 + bin.length, glb = new Uint8Array(total), dv = new DataView(glb.buffer);
  dv.setUint32(0, 0x46546C67, true); dv.setUint32(4, 2, true); dv.setUint32(8, total, true);
  dv.setUint32(12, js.length, true); dv.setUint32(16, 0x4E4F534A, true); glb.set(js, 20);
  const o = 20 + js.length; dv.setUint32(o, bin.length, true); dv.setUint32(o + 4, 0x004E4942, true); glb.set(bin, o + 8);
  check(RoomScan.read("Kitchen.glb", glb));
});

test("DXF floor plan in mm gives length and width (no height)", () => {
  const a = 15 * Math.PI / 180, c = Math.cos(a), s = Math.sin(a), rot = ([x, z]) => [x * c - z * s + 1000, x * s + z * c + 500];
  const corners = [[0, 0], [4200, 0], [4200, 3600], [0, 3600]].map(rot);
  let dxf = "0\nSECTION\n2\nHEADER\n9\n$INSUNITS\n70\n4\n0\nENDSEC\n0\nSECTION\n2\nENTITIES\n";
  for (let i = 0; i < 4; i++) { const p = corners[i], q = corners[(i + 1) % 4]; dxf += `0\nLINE\n8\nWalls\n10\n${p[0]}\n20\n${p[1]}\n11\n${q[0]}\n21\n${q[1]}\n`; }
  dxf += "0\nENDSEC\n0\nEOF\n";
  const r = RoomScan.read("plan.dxf", new TextEncoder().encode(dxf));
  check(r, false); assert.equal(r.height, null);
});

test("USDZ and other files get a clear message", () => {
  assert.throws(() => RoomScan.read("Room.usdz", new Uint8Array([0x50, 0x4b, 3, 4])), /GLB or OBJ/);
  assert.throws(() => RoomScan.read("photo.jpg", new Uint8Array(4)), /GLB, OBJ or DXF/);
});
