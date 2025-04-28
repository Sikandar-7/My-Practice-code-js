let arr = [1,2,4,3,5,-4];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length ; j++) {
        
        if (arr[j] > arr[j+1]) {
            let tem = arr[j];

            arr[j] = arr[j + 1];
            arr[j + 1] = tem;
            
        }
        
    }
    
}
console.log(arr)

// let array = [10, 20, 30, 40, 50];

// let num = 30;
// let found = false ;

// for (let i = 0; i < array.length; i++) {
    

//     if (array[i] === num ) {
//         found = true;
        
//     }
// }

// console.log(found);



// let array = [1, 2, 2, 3, 4, 4, 5];
// let uniqeArray = [];

// for (let i = 0; i < array.length; i++) {
//     let duparray = false;
//     for (let j = 0; j < uniqeArray.length; j++) {
//         if (array[i] === uniqeArray.length) {
//             duparray = true;
            
//         }
//     }

//     if (!duparray) {
//         uniqeArray.push(array[i])
//     }
    
// }
// console.log(uniqeArray);


let array = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < array.length/2; i++) {
  for (let j = 0; j < array.length - 1; j++) {
    let temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;
    console.log(array);

  }
}
console.log(array);


























