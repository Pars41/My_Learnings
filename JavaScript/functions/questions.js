

// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function printNtimes(word,reps){
    let count = 0;
    while(count< reps){
        console.log(word);
        count++;
    }
}
printNtimes("hulki",5)

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevreHesaplama(kisakenar,uzunkenar){
    console.log(`Dikdörtgenin alanı ${kisakenar}*${uzunkenar}=${kisakenar*uzunkenar} cm^karedir`,`Dikdörtgenin çevresi ${kisakenar*2+uzunkenar*2} cm dir `);
}
alanCevreHesaplama(13,78);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

function yaziTura(){
  let  random = Math.round(Math.random()*100 )
  if(random>=50){
      console.log("TURA");
  }else{
    console.log("YAZI");
  }
}

yaziTura();
// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function tamBolen(numb){
    let dizi= [];
    for(let i= 2 ; i<numb ; i++){
        if(numb%i === 0){
            dizi.push(i)
            
        }
        
    }

    return dizi;
}
console.log(tamBolen(96));


// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam(){
    let sonuc = 0;
    for(let i= 0; i<arguments.length ; i++){
        sonuc+=arguments[i];
    }
    return sonuc;
}
console.log(toplam(5,6,7,1,3,4));