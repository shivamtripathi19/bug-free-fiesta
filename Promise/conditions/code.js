const fs = require("fs");

const readFiles = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      else {
        console.log(path + "" + data.byteLength);
        resolve(data);
      }
    });
  });
};

readFiles("File1.html")
.then((data) => data.byteLength>20 ? moreThan20('File2.html'): lessThan20("File3.html"))
.catch(err => console.log("Error: " + err));

function moreThan20(path){
  readFiles(path)
  .then(data=> data.byteLength>40?printLength('File6.html'):printLength('File7.html'))
  .catch(err => console.log("Error: " + err));
}


function lessThan20(path) {
  readFiles(path)
  .then(data=> data.byteLength>80?printLength('File4.html'):printLength('File5.html'))
  .catch(err => console.log("Error: " + err));
}


function printLength(path){
  readFiles(path)
  .then((data)=> console.log("Done"))
  .catch(err => console.log("Error: " + err));
}