// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();





//   function secretHolder() {
//     let secret = "I love JS";
  
//     return {
//       getSecret: function () {
//         return secret;
//       },
//       setSecret: function (newSecret) {
//         secret = newSecret;
//       }
//     };
//   }
  
//   let mySecret = secretHolder();
//   console.log(mySecret.getSecret()); // I love JS

//   mySecret.setSecret("JavaScript is awesome");
//   console.log(mySecret.getSecret()); // JavaScript is awesome


//   let myPromise = new Promise(funtion(resolve , reject){

//   })

// let myPromise = new Promise(

//     function(resolve, reject){
//     let isSuccessful = true;

//     if(isSuccessful){
//         resolve("task complete!");

//     }else{
//         reject("task faild.");
//     }

// });


// myPromise
//   .then(function (result) {
//     console.log(result); // Task completed!
//   })
//   .catch(function (error) {
//     console.log(error); // Task failed.
//   });





let delayedPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Data received after 2 seconds");
    }, 2000);
});

delayedPromise.then(data => {
    console.log(data);
});



async function myFunc() {
    let result = await delayedPromise;
    console.log(result)
    console.log("sikander");
}





  
