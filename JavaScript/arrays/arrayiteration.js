// ARRAY ITERATION ///


const numbers = [3,5,2,"4","four",3,"4","bes","1"]

// includes()
console.log(numbers.includes(4));

// indexof()
console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(3));
console.log(numbers.lastIndexOf(7));

// join()
const strNumbers = numbers.join("")
console.log(strNumbers);

let data = [3,1,5,7,8,910,22,3]
data = data.sort((a,b)=> b-a).join()
console.log(data);

// toString()

console.log(numbers.toString());