let sayilar = [1,5,7,15,3,25,12,24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

// for (let i = 0 ; i<sayilar.length;i++){
//     console.log(sayilar[i]*sayilar[i]);

// }

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?


// for (let i = 0 ; i<sayilar.length;i++){
//     sayilar[i]%5 === 0 ? console.log(`${i+1}nci eleman 5in katıdır`) : console.log(`${i+1}nci eleman 5in katı değildir`)
// }

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
// let total = 0
// for (let i = 0 ; i<sayilar.length;i++){
//     (sayilar[i]%2 === 0)? total += sayilar[i] : console.log("çift sayı değil : ",sayilar[i]);
    

// }
// console.log(total);

let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

// for(let i = 0; i<urunler.length;i++){
//     console.log(urunler[i].toUpperCase());
// }
// for (urun of urunler){
//     console.log(urun.toUpperCase());
// }

// 5- urunler listesinde samsung geçen kaç ürün vardır?
let adet = 0
for(urun of urunler){
    if(urun.includes("samsung")){
        adet++
        console.log(urun);
    }
}
console.log(adet);

for(urun of urunler) {
    urun.includes("samsung") ? console.log(urun) : console.log("no");
}