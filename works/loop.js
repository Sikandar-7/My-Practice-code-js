
// An array is an ordered collection of values, indexed by numbers starting from 0.

// let name1 = ["sikandar", "abbs", "awan", "alvi" ];

// for (i = 0 ; i < name1.length ; i++){
//     console.log(name1[i])
// }



// let name1 = ["sikandar", "abbs", "awan", "alvi" ];

// for(let name2 of name1){
//     console.log(name2);
// }


// let name1 = ["sikandar", "abbs", "awan", "alvi" ];

// for(let name2 of name1.length){
//     console.log(name2)
// }

// let fruits = ["apple", "banana", "mango"];



// fruits.forEach(function(fruit, index) {
//     console.log(index, fruit);
//   });




// for (let key in Person){
//         console.log(key, Person[key]);
//     }
    
//     for (let key in Person) {
//             if (Person.hasOwnProperty(key)) {
//                   console.log(key, Person[key]);
//                 }
//               }
            
//             let Person = {
//                 name: "ali",
//                 age: 25,
//                 city: "lahore"
//             };

// for(let k in Person){
//     console.log(Person[k])
// }


// for(let i = 0 ; i <= Person.lenght ; i++ ){
//     console.log(i)
// }

// key and value 

// for(let [key , value ] of Object.entries(Person)){
//     console.log(key + ":" + value)
// }


// let person1 = {
//     name: "ali",
//     age: 25,
//     city: "lahore"
// };

// Object.keys(person1).forEach(function(key){
//     console.log(key + ": " + person1[key]);
// })

let person2 ={
    name: "ali",
    age: 25,
    city: "Lahore"
}

// get key and key-value
// for of loop

for(let [value] of Object.entries(person2)){
    console.log(value)
}

// for each
// Object.keys(person2).forEach(function(key){
//     console.log(key + person2[key])
// })

// for in

for(let key in person2){
    console.log(key + person2[key])
}























