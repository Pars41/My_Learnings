// TAHMİN OYUNU
// *Program 0-100 arasında rastgele bir sayı tutmalı ve kullanıcının bu sayıyı 5 kerede(hak) tahmin etmesini istemelidir.
// *Her yanlışta hakkını bir düşürmeli ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirmelidir.
// *Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" diye bir bilgi mesajı yazdırmalıdır.

let random = Math.round(Math.random() * 100);
console.log(random);
let count = 0;

do {
  guessNumber = prompt("Guess Number between 0 and 100");
  count++;
  if(guessNumber == random) {
    alert(`Tebrikler ${count}. denemede bildiniz`);
  }else if (count >= 5) {
    alert("Üzgünüz bilemediniz 5 hakkınız doldu.");
    break;
  } else if (guessNumber > random) {
    alert("AZALT");
  } else {
    alert("ARTTIR");
  } 
} while (count < 5);


