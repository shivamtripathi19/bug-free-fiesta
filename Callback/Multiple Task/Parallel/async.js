const fs = require("fs");

const path = [
  "../File.html",
  "../File1.html",
  "../File2.html",
  "../File3.html",
  "../File4.html",
];

console.log("Start__");
fs.readFile(path[0], function (err, data) {
  console.log(`File 1 : ${data.byteLength}`);
});
fs.readFile(path[1], function (err, data) {
  console.log(`File 2 : ${data.byteLength}`);
});

fs.readFile(path[2], function (err, data) {
  console.log(`File 3 : ${data.byteLength}`);
});
fs.readFile(path[3], function (err, data) {
  console.log(`File 4 : ${data.byteLength}`);
});
fs.readFile(path[4], function (err, data) {
  console.log(`File 5 : ${data.byteLength}`);
});
console.log("__End of readFile now Stack is free !");
