// 1-"Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz

let dizi = [];
dizi = ["Elma","Armut","Muz","Çilek"];

// 2-Dizi kaç elemanlıdır?
let sonuc = dizi.length;
// 3-Dizinin ilk ve son elemanı nedir?
sonuc = dizi[0]
sonuc = dizi[dizi.length-1];
// 4-Elma dizinin bir elemanı mıdır?
sonuc = dizi.includes("Elma")
sonuc = dizi.indexOf("Elma")

// 5-Kiraz meyvesini listenin sonuna ekleyin.
dizi[dizi.length] = "Kivi"
sonuc = dizi.push("Kiraz")

// 6-Dizinin son iki elemanını siliniz

dizi.pop();
dizi.pop();

dizi.splice(dizi.length-2,2);

console.log(sonuc);
console.log(dizi);


// 7-Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız. 

    // Öğrenci 1: Yusuf Aydos 1992 (90,85,78);
    // Öğrenci 2: Gürkan Kılıç 1993 (60,95,80);
    // Öğrenci 3: Remzi Alkan 1991 (80,75,50);

let ogr1 = [
    "Yusuf",
    "Aydos",
    1992,
    [90,85,78]
];
let ogr2 = [
    "Gürkan",
    "Kılıç",
    1993,
    [60,95,80]
];
let ogr3 = [
    "Remzi",
    "Alkan",
    1991,
    [80,75,50]
];
let simdi = new Date().getFullYear();
let og1yas= simdi-ogr1[2];
let og2yas= simdi-ogr2[2];
let og3yas= simdi-ogr3[2];

let ort1 , ort2 , ort3 ;
ort1 = (ogr1[3][0]+ogr1[3][1]+ogr1[3][2])/3;
ort2 = (ogr2[3][0]+ogr2[3][1]+ogr2[3][2])/3;
ort3 = (ogr3[3][0]+ogr3[3][1]+ogr3[3][2])/3;
console.log(Math.round(ort1),Math.round(ort2),Math.round(ort3) );
