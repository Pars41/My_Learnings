// function yasHesapla(dogumYılı,isim){
//     let yas = new Date().getFullYear()-dogumYılı
//     console.log(`${isim}, ${yas} yaşındasınız!`);
// }


// yasHesapla(1992,"Yusuf");

function yasHesapla(dogumYılı){
    return new Date().getFullYear()-dogumYılı
    
}



function emeklilikKalan(isim,dogumYılı){
    let kalan = 65-yasHesapla(dogumYılı)
    kalan>0 ? console.log(`${isim},emekliliğe ${kalan} yıl kaldı!`) : console.log(`${isim}, zaten emekli oldunuz!`);

}

emeklilikKalan("Cemal",1992);
emeklilikKalan("Ragıp",1971);
emeklilikKalan("Hasan",1941);