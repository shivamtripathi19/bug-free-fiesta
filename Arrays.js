let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// In-built Methods
let newArr = Array.from(arr);
let find = arr.find((ele) => ele < 9);
let search = arr.indexOf(9);

// let reverse=arr.reverse();

arr.unshift(90); // add first index
arr.shift(); // remove first index
let slice = arr.slice(1); // cut
let some = arr.some((ele) => ele % 2 === 0);
let includes = arr.includes(10);

// Higher-Order Functions ( Map, filter, reduce )

let Multiplication = arr.map((ele) => ele * 10);
let filterGreat10 = Multiplication.filter((ele) => ele > 10);
let sumOfGreaterThan10 = filterGreat10.reduce((ele, acc) => ele + acc);
console.log(sumOfGreaterThan10);

// Polyfill for Higher-order functions

Array.prototype.myloop = function (callback) {
  for (let idx = 0; idx < this.length; idx++) {
    callback(this[idx]);
  }
};

Array.prototype.myfilter = function (callback) {
  let result = [];
  for (let idx = 0; idx < this.length; idx++) {
    if (callback(this[idx])) {
      result.push(this[idx]);
    }
  }
  return result;
};

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let idx = 0; idx < this.length; idx++) {
    result.push(callback(this[idx]));
  }
  return result;
};

Array.prototype.myReduces = function (callback, acc) {
  for (let idx = 0; idx < this.length; idx++) {
    acc = acc !== undefined ? callback(acc, this[idx]) : this[idx];
  }
};

console.log(
  arr
    .map((ele) => ele * 10)
    .filter((ele) => ele > 10)
    .reduce((ele, acc) => ele + acc)
);

// Arrays destructuring in Javascript.

// Spread Parameter

// Spread vs Rest  ( OOPs overloading )
