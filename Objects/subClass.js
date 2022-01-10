class Vehicle {
  constructor(buyerName, price) {
    Object.assign(this, { buyerName, price });
  }
  Buyer() {
    console.log(`Car Buyer : ${this.buyerName}`);
  }
}

class BMW extends Vehicle {
  constructor(carName, ...args) {
    super(...args);
    this.carName = carName;
  }
}

let shivamCar = new BMW("BMW", "shivam", (price = "29Lakh"));
console.dir(shivamCar);
