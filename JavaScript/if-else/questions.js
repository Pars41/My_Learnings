// / ************** Javascript Conditional Statements ***************/ 


// *********  Sorular  *********** 

// 1- Bir sayının tek mi çift mi olduğunu consol'a yazdıran koşulu yazınız.

let number;
number = 0;
let kontrol = number%2;
if(kontrol==0){
    console.log(`sayı ${number} çifttir`);
}else if (kontrol==1){
    console.log(`sayı ${number} tektir`);
}


// 2- Bir sayının 0 ile 100 arasında olup olmadığını konsola yazdıran ternary yapıyı yazınız.
let num;
num = 100;
(num>0 && num<100) ? console.log("sayı 0-100 arasındadır") : console.log("değildir");


// 3- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile
// konsola yazdıran kodu yazınız. 
let yas;
yas = 1;
(yas>18)? console.log("oy kullanabilir") : console.log("oy kullanamaz");

// 4- Haftanın günlerinin numaraları aşağıda belirtilmiştir. Buna göre belirtilen bir sayının hangi güne 
// karşılık gelidiğini switch case yapı ile konsola yazdıran kodu yazınız.
// pazar 0 
// Pazartesi 1
// Salı 2
// Çarşamba 3
// Perşembe 4
// Cuma 5
// Cumartesi 6


// 5- 
// Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız? 
// Not:
// 90'dan büyükse AA.
// 80'den büyük yada 90'a eşitse AB,
// 70'den büyük yada 80'a eşitse BB,
// 60'den büyük yada 70'a eşitse BC,
// 50'den büyük yada 60'a eşitse CC,
// 40'den büyük yada 50'a eşitse CD,
// 30'den büyük yada 40'a eşitse DD,
// 30'dan küçük yada eşitse FF ,


// 6- Artık yıl sorusu 
// Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün 
// olan şubat ayına 29 Şubat’ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.
// Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, ve yıl 400 sayısına tam bölünüyorsa artık yıldır.
// BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

// Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız. 


// 7- kullanıcıdan bir yıl ve ay alıyoruz o ayın kaç çektiğini konsola yazdıran kodu yazınız. 
// (2024'ün 2. ayı 29 çeker.) 
