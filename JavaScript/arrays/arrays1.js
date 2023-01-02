//Dizi tanumlama

//1.Yöntem (Array literal) - Tercih edilen yöntem

const names = ["samet","can","hüsrev","levent"];
console.log(names.length); 
console.log(typeof names);

//2.Yöntem (Object Constructor)

const codingLangs = new Array("C","C++","JS","GO") 
console.log(codingLangs);

//3.Yöntem (Array.of())
const arr = Array.of(3)
console.log(arr);
