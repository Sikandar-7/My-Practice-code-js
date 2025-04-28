
// In Js , map is a built-in array method used to create a new 
// array by performing a function {on each element} of an existing array


//  In js ,Map is a methods avaiable on array that allows you to transform each
//  element in an array and return a new array with the result.


// array.map(callback(currentValue, Index, array),thisArg)

//take square
const number = [1,2,3,4,5];

const doubled = number.map(num => num * num);
console.log(doubled);
console.log(number);


// Multiply all numbers by 2
const doubled1 = number.map((num)=>{
   return num * 2;
});
console.log(doubled1);


const doubled2 = number.map(num => num * 2 );
console.log("2" , doubled2)


// Uppercase
const fruits = ["apple" , "banana" , "mango"];

const upperFruits = fruits.map(fruits => fruits.toUpperCase());
console.log(upperFruits);


// items with index
const item = ["a", "b", "c"];

const withIndex = item.map((value, index)=> { return `${index + 1 }: ${value}` } );
console.log(withIndex);



















