var obj = {
  name: "Annesha",
  display: function (){
  	console.log(this.name);
  }
}

var obj2 = {
	name: "shivam"
}


let binds=obj.display.myBind(obj2)();
console.log(binds)