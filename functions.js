// Different ways  of creating functions
"use strict";
//Functions statement
function FnName() {
  let number = 10;
  console.log(number);
}

// Functions expression with named
let myfn = function fn() {
  console.log("without named function aka anonymous function ");
};

myfn();

// Functions expression without named
let mynewfn = function () {
  console.log("Named function");
};

// Parameters and Arguments

//Parameter
// here param1,param2 is acts as a paramters
function getName(param1, param2) {
  console.log(param1 + ": Parameters");
}

// Arguments
// here shivam and mani acts as a arguments
getName("Shivam", "Mani");

/* 

Anonymous Function
a fn without a named function aka anonymous
function (){
    console.log("Anonymous function")
}

@{usecase} 
var value=function (){
    console.log("Anonymous Function");
}


*/

/*
    Callback
 the ability of function to accept the functions 
 and also redturn the function is 
 knows as First class function aka callback.
*/

function _named() {
  return "shivam_mani_Tripathi";
}
let getnamed = function getFull_Name(_named) {
  console.log(_named);
  return function () {
    return "return a functions";
  };
};
console.log(getnamed(_named)());

// Default values
function getWorldCup(winningTeam = "India", byParma) {
  return `${winningTeam} won the match by ${byParma}`;
}
console.log(getWorldCup("Pak", "10-Wickets"));

//
/*

Use Strict
- part of ES5, 
- literal expression
- indicate that the code should be executed in "strict mode".

x=10;
console.log(x) // This will cause an error because x is not declared

*/

/* 
 Why functions are objects?  
 proof: 
 function proofIsObjejet(){
   console.log("I'm functions")
 }
 console.log(typeof proofIsObjejet) // "function"
console.log( proofIsObjejet instanceof Object); // true


*/

function proofIsObjejet() {
  console.log("I'm functions");
}

console.log(typeof proofIsObjejet); // "function"
console.log(proofIsObjejet instanceof Object); // true

// Is variable contain a function?

var getRandom = function () {
  let num = Math.random() * 4;
  return num | 0;
};
console.log(getRandom());

// Functions statement vs functions Expressions

fn1();
// funMany();
function fn1() {
  console.log("I'm function statement.");
}

var funMany = function fn2() {
  console.log("I'm Function Expressions.");
};

funMany();

// Arrow functions (How deals with this keyword) ***

var arrow = () => console.log("I'm Arrow functions");
arrow();

// In terms of this.

const myObject = {
  method: function () {
    console.log(this);
  },
};

myObject.method(); //{ method: ƒn }

const mmyObject = {
  method: () => {
    console.log(this);
  },
};

mmyObject.method(); // Window Object

// Rest Parameters  *

function myRestParameters(val, val1, ...val2) {
  console.log([val, val1].concat(val2));
}

myRestParameters(1, 2, { _3: 3, _4: 4 }, [5, 6, 7, 8]);

// ABC of functions ***
const state = {
  username: "shivam",
  email: "shivam@gmail.com",
};

function setState(password) {
  return this.username + "___" + this.email + "__" + password;
}

let userItem = setState.bind(state, "password");
console.log(userItem());

let userItem1 = setState.call(state, "password");
console.log(userItem1);

let userItem2 = setState.apply(state, ["password"]);
console.log(userItem2);

// Polyfill for ABC ***

Function.prototype.myBind = function (scope, ...args) {
  scope._this = this;
  return function () {
    return scope._this(...args);
  };
};

Function.prototype.myCall = function (scope, ...args) {
  scope._this = this;
  return scope._this(...args);
};

Function.prototype.myApply = function (scope, args) {
  scope._this = this;
  return scope._this(...args);
};
let userItem3 = setState.myBind(state, "password");
console.log(userItem3());

let userItem4 = setState.myCall(state, "password");
console.log(userItem4);

let userItem5 = setState.myApply(state, ["password"]);
console.log(userItem5);
// Closure ***
// Function bundled together with its lexical environment/scope.
function outer() {
  var item = 100;
  function inner() {
    console.log(item);
  }
  return inner;
}

outer()();

for (var idx = 1; idx <= 5; idx++) {
  var a=idx;
  function inner(time) {
    setTimeout(function () {
      console.log(a);
    }, 1000 * time);
  }
  inner(idx);
}

for (var idx = 1; idx <= 5; idx++) {
  var time = idx;
  function inner() {
    function inner2() {
      var i = time;
      setTimeout(function () {
        console.log(i);
      }, 1000 * i);
    }
    inner2();
  }
  inner();
}

// IIFE  Pattern ***
// Immediately Invoked Function Expression
// IIFE can be used for avoiding the variable hoisting from within the blocks. 
// It allows the public access to methods while retaining the privacy for variables defined in the function.
(function(){
  console.log("I'm IIFE")
})()
// Generator function and yield ***

function* counter(){
  let idx=0;
  while(true){
    yield idx;
    idx++;
  }
}

let iterator=counter();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



