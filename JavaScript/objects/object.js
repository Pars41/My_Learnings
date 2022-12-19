let ogrenci1 = {
    "ad":"yusuf",
    "soyad":"aydos",
    "yas": 30,
    "şehir": "ankara",
    "hobi": ["sinema","spor","music"],
    "okullar": {
        "ilkokul": "Atatürk iöo",
        "ortaokul": "Kemal paşa oo",
        "lise": "Kuleli Askeri Lisesi",
        "üniversite": "kho"
    }
}

let ogrenci2 = {
    "ad":"hulki",
    "soyad":"sev",
    "yas": 35,
    "şehir": "uşak",
    "hobi": ["oyun","kitap","music"],
    "okullar": {
        "ilkokul": "inönü iöo",
        "ortaokul": "rüstem paşa oo",
        "lise": "asd meslek Lisesi",
        "üniversite": "SADÜ"
    }
}


console.log(ogrenci1.okullar.lise.toUpperCase());
console.log(ogrenci2.okullar.üniversite.toLowerCase());