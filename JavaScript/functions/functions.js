function yasHesapla(dogumYılı,isim){
    let yas = new Date().getFullYear()-dogumYılı
    console.log(`${isim}, ${yas} yaşındasınız!`);
}


yasHesapla(1992,"Yusuf");