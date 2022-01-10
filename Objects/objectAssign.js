let obj = {
  getName() {
    return "Shivam-mani-tripathi";
  },
  getClgName() {
    return "BPIT";
  },
  getCurrentAddress() {
    return "New Delhi";
  },
};

let obj2 = {
  getCurrentAddress() {
    return "Deoria";
  },
};

Object.assign(obj2, obj);
console.log(obj2.getCurrentAddress());

//usage

let getName = function (first, middle, last) {
  Object.assign(this, {
    first,
    middle,
    last,
  });
  return this.first;
};
let _11 = getName("1", "2", "3");
console.log(_11);
