const fs=require('fs');
console.log("Start Function");
console.log("Stack Filled..!");

fs.readFile("File1.html",callback);

console.log("web APIs Called...");
function callback(err,data){
    console.log("callback is called....")
    console.log(data.byteLength);
}

console.log("Stack is free Now.....");