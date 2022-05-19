/*
// Variable Declaration with Var,it is called global level declaration! hositing for var is global scope
//using let and const we have blocking level restrictions, once declaring variable with const we would not reassign the value

var name = "peter";
console.log(name);

//variable declaration with let and const, hoisting both let and const are block scope
let place = "someWhere";
console.log(place);

const country = "someWhere";
console.log(country);

//variable hoisiting will work varibles declare with var. let and const output will be uncaught ref error and undefined
console.log(name1);
var name1 = "random";

console.log(name2);
let name2 = "random";

console.log(name3);
var name3 = "random";

//hoisiting will work only with function declaration not using fucntion expressions code will break

/*=== (Triple equals) is a strict equality comparison operator in JavaScript, which returns false for the values
 which are not of a similar type. This operator performs type casting for equality.
  If we compare 2 with “2” using ===, then it will return a false value. */

//Arrow functions
//basic functions */
function test() {
  console.log("hello world");
}
test();

//regular function
function test1 (num1, num2){  //parameters
    return num1+num2;
}
let sum=test1(20,30); //argu
console.log(sum);

//arrow function es6
let name = () => console.log('arrow function');
name();