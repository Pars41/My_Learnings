let ankIst_mesafe = 450;
let kacKmOldu ;
let ortHiz ;

function kacDakikaKaldi(kacKmOldu,ortHiz){
    let kalanYol = ankIst_mesafe-kacKmOldu;
    let dakika = (kalanYol/ortHiz)*60;
    if(kalanYol> 0){
        console.log(`İstanbula ${dakika} dakikalık yol kaldı.`);
    } else {
        console.log("Zaten İstanbula geldiniz.");
    }
}

kacDakikaKaldi(50,100);