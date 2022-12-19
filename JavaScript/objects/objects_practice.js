/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/
let sip1 = {
  "siparis-id": "101",
  "sipariş tarihi": "31.12.2022",
  "ödeme şekli": "kredi kartı",
  "kargo adresi": "Yahya kaptan mah. Kocaeli İzmit",
  "satın alınan ürünler": {
    "ürün1": {
      "ürün id": "5",
      "ürün başlığı": "IPhone 13 Pro",
      "ürün url": "http://abc.com/iphone-13-pro",
      "ürün fiyatı": "22000",
    },
    "ürün2": {
      "ürün id": "6",
      "ürün başlığı": "IPhone 13 Pro Max",
      "ürün url": "http://abc.com/iphone-13-pro-max",
      "ürün fiyatı": "25000",
    },
  },
  "müşteri": {
    "müşteri id": "12",
  },

  "satıcı": {
    "firma id": "34",
    "firma adı": "Apple Türkiye",
  },
};

let sip2 = {
    "siparis-id": "102",
    "sipariş tarihi": "30.12.2022",
    "ödeme şekli": "kredi kartı",
    "kargo adresi": "Yahya kaptan mah. Kocaeli İzmit",
    "satın alınan ürünler": {
      ürün1: {
        "ürün id": "6",
        "ürün başlığı": "IPhone 13 Pro Max",
        "ürün url": "http://abc.com/iphone-13-pro-max",
        "ürün fiyatı": "25000",
      },
      
    },
    müşteri: {
      "müşteri id": "12",
    },
  
    satıcı: {
      "firma id": "34",
      "firma adı": "Apple Türkiye",
    },
  };
  let sip1total =( Number(sip1["satın alınan ürünler"].ürün1["ürün fiyatı"]) +Number(sip1["satın alınan ürünler"].ürün2["ürün fiyatı"]))*1.18 ;
  let sip2total = Number(sip2["satın alınan ürünler"].ürün1["ürün fiyatı"])*1.18;
  let total = sip1total+sip2total;
  console.log("Sipariş 1 kdvdahil toplam: ",sip1total);
  console.log("Sipariş 2 kdvdahil toplam: ",sip2total);
  console.log("Toplam ödenen miktar     :",total);
