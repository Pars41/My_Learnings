

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

// slice(start,end) --end exclusive
const cars = ["bmw","mercedes","fiat","anadol"]
console.log(cars.slice(2,3));
console.log(cars.slice(2));    //tek rakam başlangıç anlamında ve sonuna kadar alır

const newCars = cars.slice(3,4)
console.log(newCars,cars);

// concat()
const message = ["The weather is very nice"]
const now = [new Date().toLocaleString()]
console.log(now);    //[ '04.01.2023 20:36:57' ]

const concattedMsg = message.concat(now, "is'nt it Yusuf",[[1,2,3]])
console.log(concattedMsg);


//ARRAY ITERATION*******************

// FOR LOOP 
const grades = [55,77,23,89,100,98]
let sum = 0

for(let i = 0; i<grades.length; i++){
   sum += grades[i]

}
console.log((sum/grades.length).toFixed(2));


const arr = [-5,15,22,-4,45,78]
let negative = []
let positive = []
for(let j= 0 ; j<arr.length; j++){
    if(arr[j]< 0){
        negative.push(arr[j])
    }else{
        positive.push(arr[j])
    }
}

console.log(negative);
console.log(positive);
console.log(arr);