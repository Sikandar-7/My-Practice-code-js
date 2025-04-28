
// Q1. What will this print?
// let letters = ["x", "y", "z"];
// letters.push("a"); //["x", "y", "z", "a"] //
// letters.pop(); //["x", "y", "z"];
// console.log(letters); 
// // //["x", "y", "z"];

// Q2. What is the output?
// let str = "hello world";
// console.log(str[0] + str[str.length - 1]);
// hd

// Q3. Write code to find the largest number in the array:
// let numbers = [3, 9, 1, 20, 6];
// let largeNymber = [0]

// for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] < largeNymber) {
// }
// }


// Q4. Write code to count how many even numbers are in the array:
// let nums = [2, 7, 4, 9, 6, 11, 10];

// let even = [];
// for (let i = 0; i < nums.length; i++) {
//  if (nums[i] % 2 === 0 ) {
//          even.push(nums[i])
//         }
    
//     }
//   console.log(even.length);







// array = [1,2,3,4,5,6,7,8];

// let n = array.length;
// let half = n/2



// for (let i = 0 ; i < half ; i++) {
//     for (let j = half ; j < n ; j++) {
       
//          let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;   
//     }
// }

// console.log(array);


let array = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < array.length/2; i++) {
  for (let j = 0; j < array.length - 1; j++) {
    let temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;
  }
}
console.log(array);







