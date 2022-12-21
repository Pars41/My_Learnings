// Wikipedia'ya göre mutlu bir sayı şu işlemle tanımlanır: "Herhangi bir pozitif tam sayı ile başlayarak, sayıyı basamaklarının karelerinin toplamı ile değiştirin ve sayı 1'e eşit olana kadar (burada kalacağı) işlemi tekrarlayın veya 1'i içermeyen bir döngüde sonsuza kadar döner. Bu sürecin 1'de bittiği sayılar mutlu sayılardır, 1'de bitmeyenler ise mutsuz sayılardır (veya üzgün sayılardır)". İlk 5 mutlu sayıyı bulan ve yazdıran bir JavaScript programı yazın.

// According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

// var isHappy = function (n, counter = 0) {
//   result = false;

//   if (counter < 8) {
//     let array = n
//       .toString()
//       .split("")
//       .map((n) => n * n);

//     let sum = array.reduce((a, b) => a + b, 0);

//     if (sum === 1) {
//       return (result = true);
//     } else {
//       counter++;

//       isHappy(sum, counter);
//     }
//   }

//   return result;
// };

let num = 24;
num.toString().split(" ")
console.log(num);