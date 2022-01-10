let arr = [1, 2, [5, 4, 3, [6, [7, [88, [[89, [99]]]]]]]];
function FlatterArray(arr) {
  return arr.reduce((acc, ele) => {
    if (Array.isArray(ele)) {
      acc = acc.concat(FlatterArray(ele));
    } else {
      acc.push(ele);
    }
    return acc;
  }, []);
}

function Flatter(arr) {
  let result = [];
  if (!Array.isArray(arr)) return arr;
  for (let ele of arr) {
    result = result.concat(Flatter(ele));
  }
  return result;
}
console.log(Flatter(arr));
