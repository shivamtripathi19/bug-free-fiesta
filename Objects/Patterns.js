// factoryPatterns

const factoryPattern = function (name, age, state) {
  let temp = {};
  temp["name"] = name;
  temp["age"] = age;
  temp["state"] = state;

  temp.getPrint = function () {
    console.log(`${this.name} ${this.age} ${state}`);
  };

  return temp;
};

let person1 = factoryPattern("shivam", "22", "New-Delhi");
person1.getPrint();

// constructorPattern
let constructorPattern = function (name, age, state) {
  // this={}
  Object.assign(this, { name: name, age: age, state: state });

  this.getPrint = function () {
    console.log(`${this.name} ${this.age} ${this.state}`);
  };

  // return this
};

let person2 = new constructorPattern("Mani", "22", "New-Delhi");
person2.getPrint();
// prototypePattern

let prototypePattern = function (name, age, state) {
  Object.assign(this, { name, state, age });
  if (typeof getPrint !== "function") {
    prototypePattern.prototype.getPrint = function () {
      console.log(`${this.name} ${this.age} ${this.state}`);
    };
  }
};

let person3 = new prototypePattern("tripathi", "22", "New-Delhi");
person3.getPrint();
