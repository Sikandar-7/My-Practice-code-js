// string 

// -> string are for storing text -> string are written with quotes
let text = "sikandar" ;
console.log(text)

// single and double quotes sy b store kr skty hain 
let text1 = 'abbas'; 
console.log(text1)

// template 
let text2 = ` "siknadar" 'abbas' `
console.log(text2)

//length 
let text3 = "askmlakslmkdnas"
console.log(text3.length)

//escape characters

// js single or double quotes ma misunderstanding krta ha is leay 
// \''
// \""
// \\

let text11 = "we are so-calles \"pakistani\" from the asia."
console.log(text11)

// six other escape sequences are vaild in javaScript 

// \b backspace
// \f form feed
// \n new line 
// \r carriage return
// \t horizontal tabulator
// \v vertical tabulatore


// methods 

//string length 
let text12 = "asnjkabsdjas";
console.log(text12.length);
// extracting string char

// charAt(position)
console.log(text12.charAt(3))
// charCodeAt(position)
console.log(text12.charCodeAt(5))
// at(position)
console.log(text12.at(5))
// property access[]
console.log(text12[3])

// extracting string part
let text21 =  "sikandar, abbas , awan , alvi" ;

// slice(start, end) edxtract part a string with new staring 
// take 2 parameters : start and end but end are nor include 
console.log(text21.slice(1,13))
console.log(text21.slice(1,-13))
console.log(text21.slice(-12))

//substring  is ma parameter dyna hoty hain jo ans ma include hoonty hain 
console.log(text21.substring(2,5))
console.log(text21.substring(2,))

//substr() yah ab use nhi hota  pr iss ma dosra para lenght btata hota ha 

console.log(text21.substr(2,4))

// converting

// toUpperCase 
console.log(text21.toUpperCase())

// toLowerCase
let text23 = "             SIKANDAR , ABBAS , AWAN , ALVI             ";
console.log(text23.toLowerCase())


//concat()

console.log(text23.concat(text12,"", text21))

//trim()

console.log(text23.trim())



//trimStart
console.log(text23.trimStart())
//trimEnd
console.log(text23.trimEnd())

//padding 
let text221 = "sikandar , abbas , awan , alvi";
// padStart()
console.log(text221.padStart(3))
// padEnd()
console.log(text221.padEnd(3))

let text32 = "5";
let padded = text32.padStart(4,"s");
console.log(padded,'padded')


let text321 = "3";
let padded1 = text321.padEnd(3,"a");
console.log(padded1, 'padded1')


// repeat
console.log(text32.repeat(7))

// replace yah case sensitive hota ha is ko insensitive krny k leay /i ko use krty hain 
let text00 = "sikandar abbas awan alvi ";
console.log(text00.replace("abbas", "ali"))
console.log(text00.replace(/ABBAS/i, "ali"))


// replaceAll

console.log(text00.replaceAll(/sikandr/g , "ali"))

//split


// Hoisting 

console.log(a)
var a = 5;


// console.log(b)
// let b = 5;


// console.log(c)
// const c = 4;

sayHi();
function sayHi(){
    console.log('Hello!')
}


// sayHi1();
// var sayHi1 = function(){
//     console.log("hi!")
// }

// sayHi1();
// const sayHi1 = function(){
//     console.log("hi!")
// }


// function 

//functio declaration (ya Named Function)  
//  hosting support
function greet(){
    console.log('Hello!')
}
greet();

function sikandar(){
    console.log('hi')
}
sikandar();

// function expression 
// yah hoisting support nhi krta 

const greet1 = function(){
    console.log('hello!1')
}
greet1();

let sikandar1 = function (){
    console.log("hi1")
}
sikandar1(); 

// Arrow function 

const greet11 = () =>{
    console.log("Hello! sikandar");
};
greet11()

const siknadr2 = ()=>{
    console.log("hi sikandar");
};
siknadr2();


// anonymous Function (name nhi hota)

setTimeout(function(){
    console.log("aaaaaaaa")
},1000);

// immediately invoked function expression 

(function(){
    console.log("iife called ");
})();

(function(){
    console.log("iife sikandar")
})();

// genrator function 


// Constructor function 

// async function Person(name){
//     this.name = name; 
// }
// const p = new Person('Ali');


// async function sikandar(){

//     console.log("hello!")
// }

// async function name(params) {
    
// }


// function wait1Sec() {
//     setTimeout(() => {
//       console.log("1 second done");
//     }, 1000);
//   }
  
//   wait1Sec();
  



















