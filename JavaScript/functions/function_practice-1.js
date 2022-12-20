function ucKurusaBesKofte(kurus,kacKöfte){
    let birKofte = 15;
    let hakEdis =Math.floor(kurus/birKofte);
    let hakEdilenTutar=hakEdis*birKofte;
    let talepTutar =kacKöfte*birKofte

        if(((talepTutar-hakEdilenTutar)-kurus%birKofte)>0){
            console.log(`${hakEdis} köfte yiyebilirsiniz,${kacKöfte} adet köfte yemek isterseniz ${(talepTutar-hakEdilenTutar)-kurus%birKofte} lira daha ödeme yapmalısınız!`); 
        }else{
            console.log(`${hakEdis} köfte yiyebilirsiniz, ${Math.abs((talepTutar-hakEdilenTutar)-kurus%birKofte)} lira buyrun para üstünüz!`); 
        }

    
}


ucKurusaBesKofte(250,10);