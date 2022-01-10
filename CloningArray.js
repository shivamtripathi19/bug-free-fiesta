// shallow and deep cloning Array

// shallow : copying one top level elements
// deep : copying nested elements.

// shallow copy
let arr = ["2", [1, 2, 3], "4", "5"];
let newArr = arr;
newArr[0] = 10;

console.log(`original Array -> ${arr}`);
console.log(`cloned Array   -> ${newArr}`);

// Methods : shallow copy, using Array.from

const clonedArr = Array.from(arr);
clonedArr[0] = 100;

console.log(`original Array using Array.from -> ${arr}`);
console.log(`cloned Array using Array.from   -> ${clonedArr}`);

// Methods : shallow copy, using concat Method

const clonedArr1 = [].concat(arr);
clonedArr1[0] = 200;

console.log(`original Array using concat Method -> ${arr}`);
console.log(`cloned Array using concat Method   -> ${clonedArr1}`);

// Methods : shallow copy, using slice Methods

const clonedArr2 = arr.slice(0);
clonedArr2[0] = 300;

console.log(`original Array using slice Methods -> ${arr}`);
console.log(`cloned Array using slice Methods   -> ${clonedArr2}`);

// Methods : shallow copy, using Spread Opertor

const clonedArr3 = [...arr];
clonedArr3[0] = 400;

console.log(`original Array using spread -> ${arr}`);
console.log(`cloned Array using spread   -> ${clonedArr3}`);

// shallow copy Test Case:

const problemArr = [...arr];
problemArr[1][0] = "100";

console.log(`original Array problem -> ${arr}`);
console.log(`cloned Array problem   -> ${problemArr}`);

// Deep Clone Methods
const deepCloneArr = JSON.parse(JSON.stringify(arr));
deepCloneArr[1][0] = "00";

console.log(`original Array          -> ${arr}`);
console.log(`cloned Array deepClone  -> ${deepCloneArr}`);

function deepClone(arr) {
  let result = Array.isArray(arr) ? [] : {};
  if (typeof arr !== "object") {
    return arr;
  }
  arr.forEach((element, idx) => {
    result[idx] = deepClone(element);
  });

  return result;
}

function deepCloneMap(arr) {
  return arr.map((ele) => (Array.isArray(ele) ? deepClone(ele) : ele));
}

const deepCloneArr1 = deepCloneMap(arr);
deepCloneArr1[1][0] = "_0_";

console.log(`original Array          -> ${arr}`);
console.log(`cloned Array deepClone  -> ${deepCloneArr1}`);
