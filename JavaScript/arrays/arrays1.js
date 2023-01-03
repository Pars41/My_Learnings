//Dizi tanumlama

//1.Yöntem (Array literal) - Tercih edilen yöntem

const names = ["Ahmet","Furkan","Zeynep","Yusuf"];
console.log(names.length); 
console.log(typeof names);
names[3] = names[3].toUpperCase()
console.log(names);

console.log(names.at(-1));   //son eleman -1 index

//2.Yöntem (Object Constructor)

const codingLangs = new Array("C","C++","JS","GO") 
console.log(codingLangs);

//3.Yöntem (Array.of())
const arr = Array.of(3)
console.log(arr);


let cars = ["bmw","mercedes","tofas","renault","anadol"]
let result;
result = cars.pop()    //anadol =>son elemanı siler ve döndürür
result = cars.push("lexus")   //  5   => sona eleman ekler ve lenght i döndürür
result = cars.unshift("citroen") // 6 ilk eleman olarak atar ve lenght i döndürür
result = cars.shift() // ilk elemanı siler ve döndürür
result = cars.splice(1, 0, "vw") //
result = cars.splice(3, 1, "toros") // start num,delete num ,parameter
// result = cars.reverse()


console.log(result);
console.log(cars);

