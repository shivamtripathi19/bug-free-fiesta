const fs = require("fs");
console.log("Start Function");
console.log("Stack Filled!");

fs.promises.readFile("File1.html").then(
  (data) => console.log(data.byteLength),
  (err) => console.log(err)
);
console.log("Stack is free Now.....");
