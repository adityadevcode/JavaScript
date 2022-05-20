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
/*
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
*/

//Javascript outputs
//alert ("enter your name");
//prompt("enter your name");
//console.log(prompt("enter your name")); // it will display in the console.

/*different types of errors (error, warning)
console.error("I am JS ERROR");
console.warn("I am JS Warning");
//normal text
console.info("JS is normal"); */

//variables declaring with var(Globalscope), let and const(block)

/*if (true){
  var a="abc";
  let name="someThing";
  const place ="someWhere";
  console.log(a);
  console.log(name);
  console.log(place);
}
//output abc, something and place
console.log(a);
console.log(name);
console.log(place);
//const and let are blocklevel scope outside the block we would nt access it
//output a uncaught ref err for let and const
*/

/*operators (Arthimatic, assignment equal to is ass opr)
using assign operator we assign a value to variable, increment value ++

*/

/*let x=10;
console.log(x++);
console.log(x);
//output line 86 10 and line 87 11
let y=20;
console.log(++y);
//decrement
let z=10;
console.log(z--);
console.log(z);
//same thing line 93 10 and line 94 9
let p =25;
console.log(--p);
console.log(p);
*/

/* Datatypes primitives and non primitive types
 number, string, null,boolean, undefined, symbol
 functions, arrays and objects non primitivies

let name ="peter";
let age =40;
let isMarried =true;
let someValue= null;
let unassigned;

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(someValue));
console.log(typeof(unassigned));
//if we declared a variable and didnot assigned a value by def undefined
// we should not declare a variable in uppercase
//js dont have floats and decimals it has only numbers
//if we check a variable typeof null value is object
*/

/* strings and methods(length, concat)
let name = "peter";
let lastName ="krish"
console.log(typeof(name));
console.log(name.length);
let place="someWhere";
//concationation method
console.log("name place" + " "+place);
console.log(name.concat(lastName));
//better way of writing concatenation is template literals
//console.log (`my firstname ${name} and my lastName ${lastName}`;
console.log(`my firstName ${name} and my ${lastName}`);
*/
/*
//methods we can play around with the strings
let name ='peter,caleb,justin';
console.log(name);
console.log(name.substring(1));
//output eter,caleb,justin
console.log(name.substr(1,4));
//eter(last char is not included)
console.log(name.substring(1,4));
//ete (last one is not included )
console.log(name.split(","));
//it will display new array of strings
//(3) ['peter', 'caleb', 'justin']
console.log(name.replace("caleb","Lind"));
//peter,lind,justin
*/

/*Arrays
//one way declaring arrays
let subjects = ['maths','physics','emglish'];
console.log(subjects);
//second way of declaring arrays
const schools = new Array("Joseph","Patrick","Thomas");
console.log(schools);
//op:(3) ['Joseph', 'Patrick', 'Thomas']*/

//to access array values
/*
let names=new Array("sam","peter","kevin","keal");
console.log(names);
console.log(names[1]);//pe
console.log(names[3]);//ke
//if item is not there in array it will give undefined
console.log(names[5]);//undefined
//change the value of 1 index then
names[1]='Andrew';
console.log(names);
(4) ['sam', 'Andrew', 'kevin', 'keal']

//Array Methods (length of array,sort)
console.log(names.length);
//4
console.log(names.sort());
//(4) ['Andrew', 'keal', 'kevin', 'sam']

//to remove elements from array pop(removes last element)
console.log(names.pop());
//sam

//to remove first element shift
console.log(names.shift());
//andrew (here see code flow you can understand)

//to add element at last push
let places =["A","B","C","D"];
console.log(places.push('E'));
console.log(places);
(5) ['A', 'B', 'C', 'D', 'E']

//to add element at start unshift
let places1 =["A","B","C","D"];
console.log(places1.unshift('Z'));
console.log(places1);
(5) ['Z', 'A', 'B', 'C', 'D']

/*if we want to check typeof Array it is always will give Obj because 
both are primitive types they will always refer to obj
-if you want check if it is array we have other method of checking

console.log(Array.isArray(places1)); 
//true
//another way is to check instance of framework
console.log(places1 instanceof Array);
//true
*/

//objects in Js
/*empty obj
const temp ={}
console.log(temp);
//{}
console.log(typeof temp);
//obj

//obj literal in js
let name = {
  place:"xyz",
  location:"somewhere",
  age:23
}
console.log(name);
//{place: 'xyz', location: 'somewhere', age: 23}
console.log(typeof name);
//obj
*/

/*objects addressed inside of an obj and array as well
const firstName = {
  surname:'something',
  family:'something',
  age:34,
  nationality:{
location:'something',
path:'correct',
value:{
  age:13,
  gender:'male'
},
skills:["a","b","c"],
  }
}

console.log(firstName);
/*{surname: 'something', family: 'something', age: 34, nationality: {…}}
age: 34
family: "something"
nationality: {location: 'something', path: 'correct', value: {…}}
surname: "something"
[[Prototype]]: Object
*/

/*let name=firstName;
 console.log(name);
 /*
 {surname: 'something', family: 'something', age: 34, nationality: {…}}
basic.js:256 {surname: 'something', family: 'something', age: 34, nationality: {…}}


//access obj properties
console.log(name.surname);
//something
console.log(name.nationality);
//{location: 'something', path: 'correct', value: {…}, skills: Array(3)}
console.log(name.nationality.path);
//correct
console.log(name.skills[1]);
*/

/*object solution for above thing
const secondName = {
  surname: "something",
  family: "something",
  age: 34,
  nationality: {
    location: "something",
    path: "correct",
  },
  skills: ["a", "b", "c"],
  price:{
    lower: "something",
    upper: "something",
  },
  rates:[1,2,3],
};

console.log(secondName);
console.log(secondName.nationality);
console.log(secondName.skills);
console.log(secondName.skills[1]);
console.log(secondName.price);
console.log(secondName.rates);
*/

/*methods in objects are called function, in order to use methods we need to use this

let firsMethod = {
  name: "hi",
  age: 19,
  lastName: {
    place: "soe",
    country: "local",
  },
  some: ["a", "b", "c"],
  welcome: [1, 2, 3],
  fullDetails: function(){
    console.log(this);
    return`${this.name} this is my age${this.age}`;
  },
};

console.log(firsMethod.fullDetails());
//hi this is my age19
console.log(firsMethod.lastName.place);
//soe
console.log(this);
//this one will give window object
//310 console(This)function refers to entire object 
*/

//another way of accessing methods using destructure
/*ES6 Destructuring 
let color = {
  name:'wish',
  age:23,
  cod:'read',
}

console.log(color);
let{name,age,cod} =color;
console.log(name,age,cod);
*/

//array of objects (in real time we receive array of name like this)
//you will pick the values and display in html
/*
let employee = [
  {
    id:101,
    name:'wisj',
    place:'till',
  },
  {
    id:101,
    name:'wikk',
    place:'tilp',
  },
  {
    id:102,
    name:'sj',
    place:'tiy',
  },
]

console.log(employee);
/*(3) [{…}, {…}, {…}]
0: {id: 101, name: 'wisj', place: 'till'}
1: {id: 101, name: 'wikk', place: 'tilp'}
2: {id: 102, name: 'sj', place: 'tiy'}
length: 3
[[Prototype]]: Array(0)

//to access first obj
console.log(employee[0],[2]);
//{id: 101, name: 'wisj', place: 'till'} [2]
console.log(employee[1].name);
//wikk
*/

//adding an obj and array below

let employee1 = [
  {
    id:101,
    name:'wisj',
    place:'till',
  },
  {
    id:101,
    name:'wikk',
    place:'tilp',
  },
  {
    id:102,
    name:'sj',
    place:'tiy',
    address : {
      place:"new",
    },
    skills:['html','css','js'],
  },
];

console.log(employee1);
/*
(3) [{…}, {…}, {…}]
0: {id: 101, name: 'wisj', place: 'till'}
1: {id: 101, name: 'wikk', place: 'tilp'}
2: {id: 102, name: 'sj', place: 'tiy', address: {…}, skills: Array(3)}
length: 3
[[Prototype]]: Array(0)
*/
console.log(employee1[2].address);
//{place: 'new'}
console.log(employee1[2].skills[1]);
//css

//we will not send js objects to server we will use json obj
//we will stringify this
const ployJson = JSON.stringify(employee1 );
console.log(ployJson);
//our object is stringified we can send to back end
/*
[{"id":101,"name":"wisj","place":"till"},
{"id":101,"name":"wikk","place":"tilp"},
{"id":102,"name":"sj","place":"tiy","address":
{"place":"new"},"skills":["html","css","js"]}]

//above code you will send to server, but when you will receive data from backend
//we need to convert array of objects(json parse)*/

const empArray = JSON.parse(ployJson);
console.log(empArray);
/*
(3) [{…}, {…}, {…}]
0: {id: 101, name: 'wisj', place: 'till'}
1: {id: 101, name: 'wikk', place: 'tilp'}
2: {id: 102, name: 'sj', place: 'tiy', address: {…}, skills: Array(3)}
length: 3
*/

//Loops (for loop, while loop)




































































































