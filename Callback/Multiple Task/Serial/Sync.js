const fs = require("fs");
console.log("Starting_");
let file = fs.readFileSync("../File.html");
console.log(`file 1 ${file.byteLength}`);
let file1 = fs.readFileSync("../File1.html");
console.log(`file 2 ${file1.byteLength}`);
let file2 = fs.readFileSync("../File2.html");
console.log(`file 3 ${file2.byteLength}`);
let file3 = fs.readFileSync("../File3.html");
console.log(`file 4 ${file3.byteLength}`);
let file4 = fs.readFileSync("../File4.html");
console.log(`file 5 ${file4.byteLength}`);
console.log("_Ending");
