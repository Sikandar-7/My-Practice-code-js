// Given an array, how would you swap its first half with 
// the second half without using any built-in methods?



let array = [1,2,3,4,5,6]

for (let i = 0; i < array.length/2; i++) {

    let temp = array[i]
    array[i] = array[i + array.length/2]
    array[i + array.length/2] = temp    
}
console.log(array)


// How would you swap the first two elements with the last two elements of an array, 
// while keeping the rest of the array unchanged? Please do this using a loop.


let array1 = [1,2,3,4,5,6];

for (let i = 0; i < 2; i++) {
    let temp = array1[i];
    array1[i] = array1[array1.length - 2  + i];
    array1[array1.length - 2 + i ] = temp ; 
    
}
console.log(array1);




// find Duplicate 


let array2 = [1,3,3,4,5,6,4]
let uniqueArray = [];


for (let i = 0; i < array2.length; i++) {
    let isDuplicate = false ;

    for (let j = 0; j < uniqueArray.length; j++) {
        if (array2[i] === uniqueArray[j]) {
            isDuplicate = true ;
        }
    }
    if (!isDuplicate) {
        uniqueArray.push(array2[i])
    }
}
console.log(uniqueArray);



//find largest number


let array3 = [2,3,4,8,9]
let max = array3[0];


for (let i = 1; i < array3.length; i++) {
    if (array3[i] > max ) {
        max = array3[i];
    }    
}

console.log(max);




let arr1 = [1,2,3,4]

let countNumber = 0;
for (let i = 0; i < arr1.length; i++) {
    countNumber += array1[i] ;
}
console.log(countNumber);



// small and sorting

let arr1 = [1,2,3,4,7,9,8]

for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
            
            let temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp ;
        }
        
    }    
}

console.log(arr1);

let small = arr1[0];
console.log(small);



sorting and large 

let arr1 = [1,2,3,4,7,9,5,8]

for (let i = 0; i < arr1.length; i++) {
    for (let j = i+ 1; j < arr1.length; j++) {

        if (arr1[i] < arr1[j]) {
            let temp = arr1[i];
            arr1[i] = arr1[j]
            arr1[j] = temp ;
        }
    }
}
console.log(arr1);
let large =  arr1[0];
console.log(large);


//  frequency 

let arr = ['a', 'b', 'a', 'c', 'b', 'a'];
let frequency = {};
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (frequency[element]) {
        frequency[element]++;
    }else{
        frequency[element] = 1 ;
    }
}
console.log(frequency);


let arr4 = ['a', 'b', 'c' , 'a', 'c', 'b', 'a'];
let frequency1 = {}

for (let i = 0; i < arr4.length; i++) {

    if (frequency1[arr4[i]]) {
        frequency1[arr4[i]]++;   
    }else{
        frequency1[arr4[i]] = 1
    }
}

console.log(frequency1);


find the most frequent element and 

 let arr21 = [2, 3, 2, 5, 2, 3];

 let frequency21 = {}
 let max1 = 0 ;
 let mostFrequency = null;

 for (let i = 0; i < arr21.length; i++) {

    let element = arr21[i];
    if (frequency21[element]) {
        frequency21[element]++ ;
    }else{
        frequency21[element] = 1
    }
    if (frequency21[element] > max1) {

        max1 = frequency21[element];
        mostFrequency = element;
    }
 }
console.log(frequency21);
console.log(max1);
console.log(mostFrequency);

let array22 = [2,3,4,2,4,5,6,5,1,5]
let frequency22 = {}
let maxCount = -Infinity; 
let mostFrequent = null;

for (let i = 0; i < array22.length; i++) {

    let  element = array22[i];
    if (frequency22[element]) {
        frequency22[element]++
    } else {
        frequency22[element] = 1; 
    }

    if (frequency22[element] > maxCount) {
        maxCount = frequency22[element];
        mostFrequent = element;
    }
}
console.log(frequency22);
console.log(maxCount);
console.log(mostFrequent);


// find the least frequent element 

let str="ahmeda"

let freq = {};
let leastCount = Infinity;
let leastFrequent = null ;

// for (let i = 0; i < arr23.length; i++) {

//     let element = arr23[i];

//     if (frequency23[element]) {
//         frequency23[element]++;
//     } else {
//         frequency23[element] = 1 ;
//     }

//     if (frequency23[element]===1) {
//         console.log(frequency23[element])
//     }
// }


for(let char of str){
    if (freq[char]>0) {
        freq[char]++;
    } else {
        freq[char] = 1 ;
    }

}
console.log(freq)
for(let char of str){
    if (freq[char]===1) {
       console.log(char)
       break
    } 

}




// let arr1 = [1,2,3,4]


// let arr1 = [1,2,3,4]























