// // Lexical Scoping

// function outer(){
//     let x =10;

//     function inner(){
//         console.log(x);

//     }
//     inner();

// }
// outer(); //10


// function outer(){
//     let x = 5;

//     function inner(){
//         let x = 10;
//         console.log(x); 
//     }
//     inner();
// }
// outer(); //10


// function counter() {
//     let count = 0;

//     return function () {
//       count++;
//       console.log(count);
//     };

//   }
  
//   const myCounter = counter();
//   myCounter(); // 1? 
//   myCounter(); // 2?
  

//   const promise = new Promise((resolve, reject) => {
//     resolve("Success!");

//   });
  
//   promise.then(data => console.log(data)); //Success
  

//   async function myFunc() 
//   {
//     let result = await Promise.resolve("Hello");
//     console.log(result);
//   }
  
//   myFunc(); //helo


// let a = 100;

// function outer() {

//   let a = 50;

//   function inner()
//   {
//     console.log(a);
//   }

//   return inner;
// }

// const result = outer();
// result(); // 50?




// function makeCounter() {
//     let count = 0;
//     return {
//       increment: function () {
//         count++;
//         console.log(count);
//       },
//       decrement: function () {
//         count--;
//         console.log(count);
//       }
//     };
//   }
  
//   const counter = makeCounter();
//   counter.increment(); // 1?
//   counter.decrement(); // 0?
  


//   const promise = new Promise( (resolve, reject) => {
//     setTimeout(
//         () => resolve("First"), 1000);});

//   promise
//     .then(data => {
//       console.log(data);
//       return "Second";
//     })
//     .then(data => console.log(data));
  
    //Second 
    //first after 1 sec


    async function test(){
        console.log("Start");

        
        setTimeout(() => {
            console.log('timmeout')
        }, 0);
         new Promise(resolve =>console.log('resolve'));
        console.log("After 1 sec");
      }
      test();
      console.log("Outside");
      
      //start
      // after 1 sec
      // outside
      








