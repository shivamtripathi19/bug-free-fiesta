const fs = require("fs");
const path = [
  "../File.html",
  "../File1.html",
  "../File2.html",
  "../File3.html",
  "../File4.html",
];

path.forEach((ele, idx) => {
  let file = fs.readFileSync(ele);
  console.log(`file ${idx + 1} ${file.byteLength}`);
});
