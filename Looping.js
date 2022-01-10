let arr = [1, 2, { name: "shivam", lastName: "tripathi" }, 4, 5, 6, 7, 8, 9];

// for-in iterator over index
for (let ele of arr) {
  //   console.log(ele);
}
// for-of iterator over value
for (let idx in arr) {
  //   console.log(idx);
}

let obj = {
  name: "shivam",
  lastName: "tripathi",
  frnd: { name: "Peeyush", lastName: "__" },
  arr:[4, 5]
};

for (let idx in obj) {
  console.log(obj[idx]);

  if (typeof obj[idx] === "object") {
    let nextObj = obj[idx];
    for (let key in nextObj) {
      console.log(nextObj[key]);
    }
  }
}
