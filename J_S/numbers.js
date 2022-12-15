let result ;

result = 10 ;
result = "10";
result = Number("10");

//tamsayıya çevirir
result = parseInt("10.2");

//ondalıklıysa küsüratı ile birlikte çevirir
result = parseFloat("10.2");
result = parseInt("10a");
result = parseInt("a10");

//NaN olup olmadığını kontrol eder
result = isNaN("10a")

let number = 41.14169417642572257;
 
//ondalıklarla beraber totalde 5 haneye düşüren örnek
result = number.toPrecision(5)

//sadece ondalıkları 5 haneye düşüren örnek
result = number.toFixed(5)

//küsüratı yuvarlar
result= Math.round(3.4)

//küsüratı tavana yuvarlar
result= Math.ceil(3.4)

//küsüratı tabana yuvarlar
result= Math.floor(3.8)

//karekökünü alır
result = Math.sqrt(25)

//2nin 5nci kuvvetini alan örnek
result = Math.pow(2,5)

//mutlak değere alır
result = Math.abs(-2)

//girilen değerler arasında minimumu bulur
result = Math.min(5,6,3,1,7,9,5)

//girilen değerler arasında maximumu bulur
result = Math.max(6,4,3,8,1,2,5)

//0ila1 arasında rastgele sayı üretir
result = Math.random();













console.log(result);