class Car {
  constructor(name, price) {
    Object.assign(this, { name: name, price: price });
  }
  static getCarName(car) {
    return `Name: ${car.name} and Price ${car.price}`;
  }
  setPrice(price) {
    this.price = price;
  }
}

let car = new Car("BMW", 29);
console.log(car.setPrice(100));
console.log(Car.getCarName(car));

class ToyCar extends Car {
  constructor(...args) {
    super(...args);
  }
  static getCarName(car) {
    return super.getCarName(car);
  }
}

let toyar = new ToyCar("BMW:whiteee", 2009);
console.log(ToyCar.getCarName(toyar));
