




let arr = [2, 3, 2, 5, 2, 3];
let frequency = {};
let maxCount = 0;
let mostFrequent = null;

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element] = 1;
    }
    
    if (frequency[element] > maxCount) {
        maxCount = frequency[element];
        mostFrequent = element;
    }
}
console.log(frequency);

console.log("Most Frequent Element:", mostFrequent);


