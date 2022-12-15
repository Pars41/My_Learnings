let now = new Date(); // şimdiki tarih-saat

result = now;
//Get Methods
result = now.getDate();
result = now.getDay();  // 0: pazar 6: cumartesi
result = now.getFullYear();  //yıl
result = now.getHours()   //saat

//Set Methods
// now.setFullYear(2025);
now.setMonth(7);
now.setDate(18);


result = now;

let =dogumTarihi = new Date(1992, 7, 5)


result= now.getFullYear() - dogumTarihi.getFullYear();
let milisecond = now -dogumTarihi;
let saniye = milisecond/1000;
let dakika = saniye/60;
let saat = dakika/60;
let gun = saat/24;
result=gun
console.log(result,typeof result);