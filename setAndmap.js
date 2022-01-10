let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 12, 2, 6];
const result = new Set(arr);
result.add(99);
console.log(result.has(88));
console.log(result.size);
console.log(result.delete(8));
console.log(result);

let map = new Map();
arr.forEach((ele) => {
  if (!map.has(ele)) {
    map.set(ele,ele);
  }
});
console.log(map);
