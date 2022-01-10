class Car {
    constructor(color) {
      this.color = color;
    }
    drive() {
      console.log("I'm class driver..");
    }
  }
  
  
  let myCar = new Car("red");
  console.dir(myCar);
  
  let _Class = function() {
    let _class = function(color) {
      this.color = color;
    }
  
    _class.prototype.drive = function() {
      console.log("I'm function driver..")
    }
  
    return _class;
  };

  let myClass=_Class();
  let Class=new myClass("red")
  console.dir(Class);