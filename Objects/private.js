class Car {
  #values=110;
  constructor(name, price) {
    Object.assign(this, { name: name, price: price });
  }
  setPrice(price) {
    this.price = price;
  }

  getValue() {
    return this.#values;
  }
}

let car = new Car("BMW", 29);

car.setPrice = function (price) {
  return price * 7;
};

console.log(car.values);
console.log(car.getValue());
