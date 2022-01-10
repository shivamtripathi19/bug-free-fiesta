const fs = require("fs");

// fs.readFile("File1.html", function (err, data) {
//   console.log(`File1 length : ${data.byteLength}`);
//   if (data.byteLength > 20) {
//     fs.readFile("File2.html", function (err, data) {
//       console.log(`File2 length : ${data.byteLength}`);
//       if (data.byteLength > 40) {
//         fs.readFile("File4.html", function (err, data) {
//           console.log(`File4 length : ${data.byteLength}`);
//         });
//       } else {
//         fs.readFile("File6.html", function (err, data) {
//           console.log(`File6 length : ${data.byteLength}`);
//         });
//       }
//     });
//   } else {
//     fs.readFile("File3.html", function (err, data) {
//       console.log(`File3 length : ${data.byteLength}`);
//       if (data.byteLength > 30) {
//         fs.readFile("File5.html", function (err, data) {
//           console.log(`File5 length : ${data.byteLength}`);
//         });
//       } else {
//         fs.readFile("File7.html", function (err, data) {
//           console.log(`File7 length : ${data.byteLength}`);
//         });
//       }
//     });
//   }
// });

//================================================================

fs.readFile("File1.html", callback);

function callback(err, data) {
  console.log(`File1 length : ${data.byteLength}`);
  if (data.byteLength > 20) fs.readFile("File2.html", callback1);
  else fs.readFile("File3.html", callback3);
}

function callback1(err, data) {
  console.log(`File2 length : ${data.byteLength}`);
  if (data.byteLength > 40) fs.readFile("File4.html", callback4);
  else fs.readFile("File6.html", callback6);
}

function callback3(err, data) {
  console.log(`File3 length : ${data.byteLength}`);
  if (data.byteLength > 30) fs.readFile("File5.html", callback5);
  else fs.readFile("File7.html", callback7);
}

function callback4(err, data) {
  console.log(`File4 length : ${data.byteLength}`);
}
function callback5(err, data) {
  console.log(`File5 length : ${data.byteLength}`);
}
function callback6(err, data) {
  console.log(`File6 length : ${data.byteLength}`);
}
function callback7(err, data) {
  console.log(`File7 length : ${data.byteLength}`);
}
