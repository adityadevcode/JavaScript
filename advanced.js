//Functions
//normal function
//function expressions

/*
let name = function(){
console.log("hello");
}

console.log(name);
/* if we dont include parenthesis it will show entire function
ƒ (){
console.log("hello");
}

console.log(name());
/* if we include parenthesis it would display name
hello


//arguments on top and parameters at below
let name1 = function(GoodMorning, GoodNight){
    console.log("GoodMorning");
    console.log("GoodNight")
    }

    //name1("Beautiful Sunshine","Cold and Raining");
    /*
    GoodMorning
    GoodNight
    
   console.log(name1());
   //same out put as above
   */

/*function declaration
function name() {
    return "everyone"
}

console.log(name());
//everyone
*/

/*function displayName(name) {
    return name
}
console.log(displayName("welcome"));
//welcome
*/

/* Above function we are implementing Arrow function 


let someThing = () => {

} */

/*
let someThing= () =>"everyone" ;
console.log(someThing());
//someThing
*/

/*
let displayName =(name)=> name;
console.log(displayName("welcome"));
//welcome
//if we have argument we can remove parenthesis
/*
let displayName =name=> name;
console.log(displayName("welcome"));


//2 arguments we are mentioning

function sum (a,b){
    return a+b;  
}
console.log(sum(3,9));
//12

//arrow function
let sum1 = (a,b) => a+b;
console.log(sum1(2,3));
//output 5 */

/*when you have no arguments you need to have parenthesis (). 
let mul = () => a+b;
if we have single argument, we can elimate parenthesis
let mul = a => a;
2 arguments we need to keep parenthesis
let sum = (a,b) => a+b; */
//you can remove curly braces and return statement if you have one statement

/*
let multiply = a =>a;
console.log(multiply("welcome"));
//welcome

//implicit return statement if we have one line no need add for multiple we need for sure

let multi = (a,b) => {
    return a*b;
}

console.log(multi(5,4));
//20
let multi1 = (a,b) =>  a*b;
console.log(multi1(5,4));
//20

//if we have multiple statements then we need to include return and {}
let mul =(a,b)=> {
    var c=a+b;
    return c;
}
console.log(mul(4,4));
//8
let mu =(a,b)=> 
    var c=a+b;
     c;

console.log(mu(4,4));
//error if we remove curly braces and return
//Uncaught SyntaxError: Unexpected token 'var'

//all above are named function below code unannonymous or unnamed function
*/

/*Anonymous function or unnamed function
setTimeout(function() {
    console.log("hello after 1 sec")},1000);
//hello after 1 sec

//convert annonymous function into arrow function
setTimeout1(()=> {
    console.log('hello display after 1 sec')},10000);*/

    //now assign arrow function to variable
    let ab = () =>
     console.log("hello world");
     setTimeout(ab,1000);




























































































