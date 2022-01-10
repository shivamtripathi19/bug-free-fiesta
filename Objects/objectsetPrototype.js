let fullName = {
  getFirstName() {
    return "Shivam";
  },
  getMiddleName() {
    return "Mani";
  },
  getLastName() {
    return "Tripathi";
  },
};

let callfrndName = {
  getOtherName() {
    return "Bhai-Bhai";
  },
};

let fullDetials = {
  //   getFirstName() {
  //       return "Amit";
  //     },
};
Object.setPrototypeOf(fullDetials, fullName);
/* Object.setPrototypeOf(fullDetials,callfrndName); */

console.log(fullDetials.getFirstName());
