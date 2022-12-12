let ogr1_ad = "Ada";
let ogr1_soyad = "Bilgi";
let ogr1_dgm = 2012;
let ogr1_notes1 = 70;
let ogr1_notes2 = 70;
let ogr1_notes3 = 80;

let ogr2_ad = "Yiğit";
let ogr2_soyad = "Bilgi";
let ogr2_dgm = 2010;
let ogr2_notes1 = 40;
let ogr2_notes2 = 40;
let ogr2_notes3 = 50;

let ogr1_ort = ((ogr1_notes1+ogr1_notes2+ogr1_notes3)/3);
let ogr2_ort = ((ogr2_notes1+ogr2_notes2+ogr2_notes3)/3);
console.log(parseInt(ogr1_ort));
console.log(parseInt(ogr2_ort));

let suankiYil = new Date().getFullYear();
console.log(suankiYil);

let ogr1_yas = suankiYil-ogr1_dgm;
console.log(ogr1_yas);

let ogr2_yas = suankiYil-ogr2_dgm;
console.log(ogr2_yas);

function Basarilimi(ort){
    if(ort>=50){
        console.log("Öğrencimiz başarılı");
    }
    else{
        console.log("Öğrenciniz gabi");
    }
    
}
Basarilimi(ogr2_ort);