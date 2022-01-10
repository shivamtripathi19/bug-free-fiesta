const fs=require('fs');
console.log("Start Function");
console.log("Stack Filled!");

const file=fs.readFileSync("File1.html");
console.log(file.byteLength);
console.log("Stack is free Now.....");
