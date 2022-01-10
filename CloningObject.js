// shallow and deep cloning Object

// shallow : copying one top level elements
// deep : copying nested elements.

const obj = {
  fullName: { firstName: "shivam", middleName: "mani", lastName: "tripathi" },
  username: "shivam.mani1998",
  password: "*******",
};
// shallow copy using spread operator
const cloned_Object = { ...obj };
cloned_Object.username = "shivam.mani";

console.log(`original Object -> ${obj.username}`);
console.log(`cloned Object   -> ${cloned_Object.username}`);

// Deep cloning Testcase:
cloned_Object.fullName.middleName = "shivam.mani";
console.log(`original Object -> ${obj.fullName.middleName}`);
console.log(`cloned Object   -> ${cloned_Object.fullName.middleName}`);

// shallow copy using Object.assign method
const cloned_Object1 = Object.assign({}, obj);
cloned_Object1.username = "geekcodershivam";
console.log(`original Object -> ${obj.username}`);
console.log(`cloned Object   -> ${cloned_Object1.username}`);

// Deep cloned using in-build functions
console.log("-------------------------JSON-------------------------------------")
const deep_Object = JSON.parse(JSON.stringify(obj));
deep_Object.fullName.middleName = "___";
console.log(`original Object -> ${obj.fullName.middleName}`);
console.log(`cloned Object   -> ${deep_Object.fullName.middleName}`);

// Deep cloned

function deepClone(obj) {
  let result = Array.isArray(obj) ? [] : {};

  if (typeof obj !== "object") {
    return obj;
  }

  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
}

console.log("-------------------------Function---------------------------------")
const deep_Object1 = deepClone(obj);
deep_Object1.fullName.middleName = "_44__";
console.log(`original Object -> ${obj.fullName.middleName}`);
console.log(`cloned Object   -> ${deep_Object1.fullName.middleName}`);
