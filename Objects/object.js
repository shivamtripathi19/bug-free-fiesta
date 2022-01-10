let Car = function (color) {
    // public member
  this.color = color;
};
// adding methods 
Car.prototype = {
  getColor() {
    return this.color;
  },
};

// override
Car.prototype.toString = function () {
  return `My car colour is ${this.color}`;
};

let newCar = new Car("red");
console.log(newCar);

let ToyCar = function () {};

ToyCar.prototype = Object.create(Car.prototype);

let dummyCar = new ToyCar();
console.log(dummyCar instanceof ToyCar);
console.log(ToyCar.prototype.isPrototypeOf(dummyCar));
console.log(dummyCar instanceof Car);
console.log(dummyCar instanceof Object);
