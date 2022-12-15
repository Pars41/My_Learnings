

let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";
let result;

// 1- url kaç karakterlidir?
result = url.length;
// 2- kursAdi kaç kelimeden oluşmaktadır?
result = kursAdi.split(" ").length
// 3- url https ile mi başlıyor?
result = url.startsWith("https")
// 4- kursAdi içerisinde Eğitimi kelimesi var mı?
result = kursAdi.includes("Eğitimi")
// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.sadikturan.com/komple-web-geliştirme-kursu
kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");
result = url+kursAdi;

console.log(result);
// console.log(kursAdi);
// console.log(url);