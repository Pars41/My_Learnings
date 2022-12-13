let yas = 30;
let ad = "Yusuf";
let soyad = "Aydos";
let lise = "Kuleli Askeri Lisesi";
// ternary operators;
let emeklilik = (65-yas>0) ? `Emekliliğe ${65-yas} yıl kaldı` : `Zaten emekli oldum(Hadi yine iyiyim)`;
console.log(emeklilik);
let mesaj = `Benim adım ${ad}, soyadım ${soyad},${lise} mezunuyum,${yas} yaşındayım,${emeklilik}.`;
console.log(mesaj);