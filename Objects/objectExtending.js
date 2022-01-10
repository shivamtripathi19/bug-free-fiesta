// Extending function Constructors

let Mammal = function (legs) {
  this.legs = legs;
};

Mammal.prototype = {
  walk() {
    return "walking";
  },
  sleep() {
    return "sleeping";
  },
};

let Bat = function (legs, isVeg) {
  Mammal.call(this, legs);
  this.isVeg = isVeg;
};

Bat.prototype = Object.create(Mammal.prototype);
Bat.prototype.constructor = Bat;
Bat.prototype.fly = function () {
  return "flying";
};

let fruitBat = new Bat(4, true, true);
console.log(fruitBat.walk());
console.log(fruitBat.fly());
