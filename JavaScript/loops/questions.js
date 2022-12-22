// Soru-1  1000 ile 2000 arasındaki 13 e bölümünden 3 kalan sayıları konsola yazdırınız ?
let array = [];
for(let i= 1000; i <=2000 ; i++){
    if(i%13 === 3){
        array.push(i);
    }
}
console.log(array);
// Soru-2  Kullanıcıdan alınan 5 sayının ortalamasını konsola yazdırınız ?
function ort(n1,n2,n3,n4,n5){
    console.log(`ortalama : ${(n1+n2+n3+n4+n5)/5}`);
}
ort(5,32,75,98,13);
// Soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve konsola yazan kodu yazınız ?
// let sum = 0;
// let num = Number(prompt("enter integer:"));
// while(num>0){
//     sum += num;
//     console.log(sum);
//     num = Number(prompt("enter integer:"));
// }

// console.log(`${num}is not integer`);
// Soru-4 Sizden 1'den 100'e kadar sayıları yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz',
// 5'in katlarına gelince 'Buzz'.Hem 3'ün hemde 5'in katlarına gelince 'FizzBuzz' yazdırmanız istenmektedir ?
for(let i =1 ; i<=100; i++){
    console.log(i);
    
    if(i%3===0 && i%5===0){
            console.log("Fizz");
        }else if(i%5===0){
            console.log("Buzz");
        }else if(i%3===0) {
            console.log("FizzBuzz");
        }
    
}

// Soru-5 bir sayının(number) basamak sayısını yazdıran kodu yazınız ?
// Soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini konsola yazdırınız ?  //0 1 1 2 3 5 8 13
// soru-7 Aşağıdaki çıktıyı konsola yazdırınız ?
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?
// O
// OO
// OOO
// OOOO
// OOOOO
// OOOOOO
// OOOOOOO
// soru-9 Aşağıdaki çıktıyı konsola yazdırınız ?
//    O
//   OOO
//  OOOOO
// OOOOOOO