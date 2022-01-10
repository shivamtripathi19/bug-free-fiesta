const fs = require("fs");

const path = [
  "../File.html",
  "../File1.html",
  "../File2.html",
  "../File3.html",
  "../File4.html",
];

readFile(0);
function readFile(idx) {
  if (idx === path.length) return;
  fs.readFile(path[idx], function (err, data) {
    console.log(`File${idx + 1} : ${data.byteLength}`);
  });
  readFile(idx + 1);
}
