
// //function


// function sikandar(){
//    console.log("hello");
// }
// sikandar();

// // function expression 

// const multiply =  function (a , b) {
//     return a * b; 
// }


// // arrow function

// const multiply1 = (a, b) => a - b;
// const sayHi = () => console.log("hi");
// const d = x = x*2;

// // iife function  

// (function name(params) {
    
// })();




// promises


// new Promise((resolve) => {
//     setTimeout(() => resolve(10), 1000);
//   })
//   .then((num) => {
//     console.log("First:", num); // 10
//     return num * 2;
//   })
//   .then((num) => {
//     console.log("Second:", num); // 20
//     return num + 5;
//   })
//   .then((num) => {
//     console.log("Third:", num); // 25
//   });
  


// let a = "siknadar"
// console.log(a.length -1);

// let a1 = [1,2,3,4,5]
// console.log(a1.length-1);





const number = [1,2,3,4,5];

number.forEach(Element => {
    console.log(Element)
});

let number2 = []


for (let i = 0; i < number.length; i++) {
    const element = number[i];
    console.log(element) 
}


for (const element of number) {    
  console.log(element * 2)
}



const prices = [10, 20 ,30 ,40];

let sum = 0 ;

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];

}
console.log("sikandar" ,sum);


const num = [1,2,3];

let newArray = []



num.forEach(element => {
   newArray.push(element * 2)
    
});

console.log(newArray)



const names = ["ali ", "ahmad" ," sara"];

for (let i = 0; i < names.length; i++) {
    
    const element = names[i];
    console.log(element.toUpperCase())
}


const values = [1,2,3,4,5,6,7,8,9,10];

const value1 = [];

for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
        value1.push(values[i]);
       
    }
}
console.log(value1)


const colors = ["red", "blue", "red", "green", "red"];


let count = 0 ;

for (let i = 0; i < colors.length; i++) {
    if (colors[i] === "blue") {
        count ++;
    }    
}

console.log("colo" , count)














