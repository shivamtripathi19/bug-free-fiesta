/* Car => toyCar => dummyCar */

let Car = function (color) {
  this.color = color;
};

Car.prototype.printColor = function () {
  return `This is Car Color :${this.color} `;
};

let ToyCar = function (color) {
  this.color = color;
};

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.printColor = function () {
  return `This is ToyCar Color :${this.color} `;
};

let DummyCar = function (color) {
  this.color = color;
};

DummyCar.prototype = Object.create(ToyCar.prototype);

DummyCar.prototype.printColor = function () {
  return `This is DummyCar Color :${this.color} `;
};

const bmwCar = new Car("white");
const legoCar = new ToyCar("black");
const fakeCar = new DummyCar("red");

console.log(bmwCar.printColor());
console.log(legoCar.printColor());
console.log(fakeCar.printColor());
