const fs = require("fs");

const path = [
  "../File.html",
  "../File1.html",
  "../File2.html",
  "../File3.html",
  "../File4.html",
];

fs.readFile(path[0], cb);
function cb(err, data) {
  console.log(`File1 length : ${data.byteLength}`);
  fs.readFile(path[1], cb1);
}
function cb1(err, data) {
  console.log(`File2 length : ${data.byteLength}`);
  fs.readFile(path[2], cb2);
}
function cb2(err, data) {
  console.log(`File3 length : ${data.byteLength}`);
  fs.readFile(path[3], cb3);
}
function cb3(err, data) {
  console.log(`File4 length : ${data.byteLength}`);
  fs.readFile(path[4], cb4);
}
function cb4(err, data) {
  console.log(`File5 length : ${data.byteLength}`);
}
