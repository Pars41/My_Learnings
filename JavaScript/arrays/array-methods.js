let ogrenciler = ["yusuf","furkan","şevki"];

sonuc = ogrenciler.length;

//array to string ;

sonuc = ogrenciler.toString();
sonuc = ogrenciler.join("-");

//eleman silme

sonuc = ogrenciler.pop();           //son elmn silinir silinen eleman geri döndürülür
sonuc = ogrenciler.shift();      //ilk eleman silinir

//eleman ekleme
sonuc = ogrenciler.push("veli");          //dizinin sonuna eleman ekler
sonuc = ogrenciler.unshift("gürdal");       //dizinin başına eleman ekler


let markalar1 = ["mazda","toyata"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

sonuc = markalar1.concat(markalar2,markalar3)  //dizileri birleştir
sonuc = markalar1.splice(0, 0, "bmw","audi"); //n ninci elmndan it. , n elmn sil , ekle dizi||string


console.log(sonuc);
console.log(markalar1);
