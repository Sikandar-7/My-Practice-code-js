
let arr = [1,2,[3,4]] 

console.log(arr[2]);


for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {

            console.log(arr[2][j])    
    }
    
}


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// matrix[row][colum];
console.log(matrix[2][2]);
  
  let c = matrix.length
  console.log(c)

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
    
        console.log("sikandar",matrix[i][j]);
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      console.log(`Element at = ${matrix[i][j]}`);
      
    }
  }
  

let array = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

let newArray = [];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    let x = array[i][j];
    console.log(x);
   
    let y = newArray.push(x)
    console.log(y)
    // if (x=== '') {
    // }
  }
}
      
console.log(newArray)


let arra1 = [52, 25, 18, 13, 16, 18 , 11, 20 ,22 , 23 ];

let even =[]
let odd = []

for (let i = arra1.length; i >=0 ; i--) {
  if (arra1[i] % 2 === 0  ) {
    console.log("even" , arra1[i]);
    even.push(arra1[i])
  } 
}
console.log(arra2)


let nums =[5, 12 , 3, 18 , 7];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 10 ) {
    console.log(nums[i]);
  }
}

let  str = 'hello'

let freq = {} 

for(let char of str){
  if(freq[char]>0){
    freq[char]++
  } else{
    freq[char] = 1
  }
}

console.log(freq)





































