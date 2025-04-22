let obj = {
    a: 1,
    b: 2,
    c: 3
}

let keys =  Object.keys(obj);
let revObj = {};

for (let i= keys.length - 1 ; i >=0 ; i-- ){
    let key = keys[i];
    revObj[key] = obj[key];
}
console.log(revObj)




let array = [1,2,3,4,5];
for(let i = array.length -1 ; i >= 0 ; i --){

    console.log(array[i])
}

let a = 5
let b = 2

[1,2,4,3,5,-4]









