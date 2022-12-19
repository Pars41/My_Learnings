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
// let adet = 0
// for(urun of urunler){
//     if(urun.includes("samsung")){
//         adet++
//         console.log(urun);
//     }
// }
// console.log(adet);

// for(urun of urunler) {
//     urun.includes("samsung") ? console.log(urun) : console.log("no");
// }

let ogrenciler = [
    {"ad":"yusuf", "soyad": "aydos", "notlar": [90,70,90]},
    {"ad":"cemşit", "soyad": "sakar", "notlar": [80,70,80]},
    {"ad":"hulki", "soyad": "önder", "notlar": [10,20,60]}
];

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

for(let i = 0 ; i<ogrenciler.length;i++){
  console.log(`${ogrenciler[i].ad}un not ortalaması: ${Math.ceil((ogrenciler[i].notlar[0]+ogrenciler[i].notlar[1]+ogrenciler[i].notlar[2])/3)} dir`); 
  (Math.ceil((ogrenciler[i].notlar[0]+ogrenciler[i].notlar[1]+ogrenciler[i].notlar[2])/3))>=50 ? console.log(`${ogrenciler[i].ad} başarılıdır`):console.log(`${ogrenciler[i].ad} sınıfta kaldı`)
}

// tüm öğrencilerin not ortalaması kaçtır?
let totalogr=0;
for(let i = 0 ; i<ogrenciler.length;i++){
totalogr+=Math.ceil((ogrenciler[i].notlar[0]+ogrenciler[i].notlar[1]+ogrenciler[i].notlar[2])/3)

}
console.log("tüm öğrencilerin not ortalaması: ",Math.round(totalogr/3),"dir");