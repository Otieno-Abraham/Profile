// One-off: pack the brand favicon PNG into a valid .ico (PNG-in-ICO, supported since Vista/modern browsers).
const fs = require("fs");
const path = require("path");

const pngPath = path.join(__dirname, "..", "src", "static", "favicon", "favicon-48.png");
const icoPath = path.join(__dirname, "..", "src", "static", "favicon.ico");

const png = fs.readFileSync(pngPath);
const size = 48;

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count

const entry = Buffer.alloc(16);
entry.writeUInt8(size, 0);       // width
entry.writeUInt8(size, 1);       // height
entry.writeUInt8(0, 2);          // color count
entry.writeUInt8(0, 3);          // reserved
entry.writeUInt16LE(1, 4);       // color planes
entry.writeUInt16LE(32, 6);      // bits per pixel
entry.writeUInt32LE(png.length, 8);  // size of PNG data
entry.writeUInt32LE(22, 12);     // offset (6 header + 16 entry)

fs.writeFileSync(icoPath, Buffer.concat([header, entry, png]));
console.log("Wrote", icoPath, fs.statSync(icoPath).size, "bytes");
