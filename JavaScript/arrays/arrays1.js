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


