


// // object iteration




// // print all key 

// const students = {
//     name: "ali",
//     age:25,
//     grade: "a"
// }

// for (const key in students) {
//     console.log(key)
// }

// // Print all values of the object

// const user = {username: "admin" , password: "1234" , role: "editors" };

// for (const key in user) {

//     console.log(user[key]);
// }

// // Print only numeric values

// const data = {name: 'sikandar', age: 22 ,marks: 88 , subject: 'math'}

// for (const key in data) {
   
//     if (typeof data[key] === 'number') {
//         console.log(data[key]); 
//     }
// }

// // Count how many properties are in the object

// const car = { brand: "Toyota", model: "Corolla", year: 2020 };

// for(const key in car){

//     console.log(`${key}: ${car[key]}`);

// }
// // Convert values to uppercase (only strings)

// const info = { name: "Ali", city: "Lahore", age: 30 };

// for(const key in info){
//     if (typeof info[key] === 'string') {
//         console.log(info[key].toUpperCase());
        
//     }
// }
// // Copy values to a new object

// const original = { a: 1, b: 2, c: 3 };
// const newObject = {}

// for(const key in original){
//     newObject[key] = original[key];
// }

// console.log(newObject);

// // Multiply all numeric values by 2

// const stats = {kills: 5 , deaths: 2 ,assists: 3};

// for(const key in stats) {
//     if (typeof stats[key] === 'number') {
//         stats[key] *= 2;
//     }
// }

// console.log(stats);

// // Skip a specific key (e.g. password)


// // const user1 = {username: "admin",  passwords: "sikandar" , role : "admin"};

// // for (const key in user1) {
   
// //     if (key === "password") {
        
// //     }

// // }


// Print all keys of the object:

// const student = {
//     name: 'ali',
//     age: 24,
//     grade: "A"
// }

// for (const key in student) {
//     console.log(key);
// }

// // Print all values of the object
// for(const key in student){
//     console.log(student[key]);
    
// }

// // Print key-value pairs
// for(const key in student){

//     console.log(`${key}: ${student[key]}`);
// }

// // Print only numeric values
// for (const key in student) {
    
//     if (typeof student[key] === "number") {
//         console.log(student[key]); 
//     }
// }

// // Count how many properties are in the object

// let count = 0 ;

// for (const key in student) {
//    count++;
// }
// console.log(count);

// // Convert values to uppercase (only strings)


// for (const key in student) {
//     if (typeof student[key] === "string") {
//         console.log(student[key].toUpperCase());
//     }
// }


// // Copy values to a new object

// let newOb = {}

// for (const key in student) {
  
//     newOb[key] = student[key];
// }
// console.log(newOb);

// // Multiply all numeric values by 2

// for(const key in student){

//     if (typeof student[key] === 'number') {
//         student[key] *= 2;

//         console.log(student[key]);
        
//     }
// }

// // Skip a specific key (e.g. password)

// for(const key in student){
//     if (key === "age") continue;

//     console.log( ` sikandar ${key} :${student[key]}`);
    

// }



// let details = {

//     name: "sikandar",
//     age: 23,
//     adress: {
//         city: "lahore",
//         area: "sabzazar b-Block",
//         zip: 54000
//     }
// }


// for(let key in details){

//     if (typeof details[key] === 'object') {

//         for (const innerKey in details[key]) {
//            console.log(`${innerKey}:${details[key][innerKey]}`);
           
//         } 
//     }
// }



const company = {
    name: "TechSoft",
    founded: 2010,
    employees: {
      emp1: { name: "Ahmed", role: "Developer" }
    }
  };


for (const key in company) {
    if (typeof company[key] === 'object') {
        for (const innerKey in company[key]) {
            
            if (typeof company[key][innerKey] === 'object') {
                for(const prop in company[key][innerKey]){
                    console.log(`${key}.${innerKey}.${prop} : ${company[key][innerKey][prop]}`);
                }
            }else{
                console.log(`${key}.${innerKey} : ${company[key][innerKey]}`)
            }
        }
    }else{
        console.log(`${key} : ${company[key]}`);

    }
}











