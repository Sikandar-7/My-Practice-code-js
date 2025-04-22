// let a = 5
// let b = 2

// if (a = 5) {
//     console.log("a" + b)
// }else if (b = 2) {
//     console.log("b" + a)
// }else{
//     console.log("s",c )
// }



// let arr = [1,2,4,3,5,-4];

// for (let i = 0; i < arr.length -1 ; i++) { 
//     for (let j = 0; j < arr.length +1 ; j++) {

//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr)


// let arr = [5, 2, 9, 1, 3];

// for (let i = 0; i < arr.length ; i++) {
//   for (let j = 0; j < arr.length ; j++) {
      
//       console.log( arr[i] , arr[j]); // [1, 2, 3, 5, 9]
//     }
//   }

// let arr = [5, 2, 9, 1, 3];

// for(let i = 0 ; i < arr.length ; i++ ){
//     for(let j = i+1 ; j < arr.length; j++){
        
//         if(arr[i]>arr[j]){
//             let temp = arr[i]
//             arr[i]  = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)

// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i +1 ; j < arr.length ; j++){
//         if (arr[i]>arr[j]) {
            
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp ;
            
//         }
       
//     }
    
// }
// console.log(arr)

// ascending

// let arr = [5, 2, 9, 1, 3];

// arr[i] = [5, 2, 9, 1, 3];
// arr[j] = [5, 2, 9, 1, 3];

// for(let i= 0 ; i < arr.length ; i++){
//     for(let j = i+1 ; j < arr.length ; j++ ){
//         if (arr[i]>arr[j]){

//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr) 


                // → [2, 5, 9, 1, 3]  
                // → [2, 1, 9, 5, 3]  
                // → [2, 1, 5, 3, 9]  
                // → [1, 2, 3, 5, 9]







// Duplicate Finder 

// let arr1 = [1,2,3,4,5,6,6,2,3,]

// for(let i = 0 ; i < arr1.length ; i++){
//     for(let j = i+1 ; j < arr1.length; j++ ){
//         if(arr1[i] === arr1[j]){
//             console.log(arr1[i])
//         }
//     }
// } 


// let arr2 = [1,2,3]

// for(let i = 0 ; i < arr2.length ; i++){
//     for(let j = 0 ; j < arr2.length ; j++){
//         console.log(arr2[j])
//     }
// }




// let array1 = [1,2,4,3,5,-4];

// for (let i = 0; i < array1.length; i++) {
//     for (let j = i+1; j < array1.length; j++) {
//       if (array1[i]>array1[j]) {
        
//         let temp = array1[i];
//         array1[i] = array1[j];
//         array1[j]= temp
//       }   
//     }
// }

// console.log(array1)



// let array2 = [1,1,2,2,3,4,5,5]

// let duplArr = []

// for (let i = 0; i < array2.length; i++) {
//    for (let j = i+1 ; j < array2.length; j++) {
//     if (array2[i]===array2[j] ) {
        
//         console.log(array2[i])
        
        

//         for (let k = 0; k < duplArr.length; k++) {
//            if (duplArr[k] === array2[i]) {

//             console.log(duplArr)

//            }   
//         }
//     }    
//    }
// }


// let arr1 = [1 , 2 , 3 ,  4 ,5 ,6 ,6 ,2, 3 ]

// let duplArr = []

// for(let i = 0 ; i < arr1.length ; i++ ){
//     for (let j =  i+ 1; j < arr1.length; j++) {
//        if (arr1[i] === arr1[j]) {
        
//         let found = false;
//         for (let k = 0; k < duplArr.length ; k++) {

//             if (duplArr[k] === arr1[i]) {
//                 found = true ;
//                 break;
//             }
//         }
//         if (!found) {
//             duplArr.push(arr1[i])            
//         }
//        }   
//     }
// }console.log(duplArr);


// let arr22 = [1,1,2,3,4,5,4]
// let duplarr1 = []

// for (let i = 0; i < arr22.length; i++) {
//     for (let j = i + 1 ; j < arr22.length; j++) {

//         if (arr22[i]=== arr22[j]) {

//             let found = false;
//             for (let k = 0; k < duplarr1.length; k++) { 
//                 if(duplarr1[k] === arr22[i]){
//                     found = true;
//                     break;
//                 }
//             } 
//             if (!found) {
//                 duplarr1.push(arr22[i])
//            }
//         }

//     }
// }
// console.log( duplarr1)




let arr3 = [ 1, 2 ,3 , 4, 5, 1,2,5,3  ]
let duparr2 = []

for (let i = 0; i < arr3.length; i++) {
    for (let j = i + 1; j < arr3.length; j++) {
        if (arr3[i]===arr3[j]) {

            let found = false ;
            for (let k = 0; k < duparr2.length; k++) {
                if (duparr2[k]=== arr3[i]) {    
                    found = true;
                }
            }
            if (!found) {
                duparr2.push(arr3[i])
            }
        }
    }
}

console.log(duparr2)


let arr = [1, 2, 3,4 ,3 ,5,5,2 ]
let duplArr2 =[]

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            
            let found = false;

            for (let k = 0; k < duplArr2.length; k++) {
                if (duplArr2[k] === arr[i]) {
                    found = true;
                }   
            }
            if (!found) {
                duplArr2.push(arr[i]);
            }
        } 
    }    
}

console.log(duplArr2);

























