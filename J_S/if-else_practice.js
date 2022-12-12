// Bir sayının 41-139 arasında olup olmadığını kontrol ediniz

// let sayi ;
// sayi = 40;
// if(sayi>41 && sayi<139){
//     console.log("evet sayı 41 ila 139 arasındadır");
// }else{
//     console.log("sayı belirtilen aralık içerisinde değildir");
// }

// Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz

// let sayi1;
// sayi1 = 86;
//  if(sayi1>0 && sayi1%2==1){
//     console.log("evet sayı pozitif tek sayıdır");
//  }else{
//     console.log("hayır sayı pozitif tek sayı değildir");
//  }

// x, y, z sayılarının büyüklük karşılaştırmasını yapınız (else if i araştırınız)

// let x, y, z ;
// x = 151;
// y = 151;
// z = 151;
// if(x>y && x>z){
//     console.log("x en büyük sayıdır");
// }
// else if(y>x && y>z){
//     console.log("y en büyük sayıdır");
// }
// else if (z>x && z>y){
//     console.log("z en büyük sayıdır");
// }else{
//     console.log("sayılar eşittir");
// }

// 2 vize (%40) ve 1 final (%60) notuna göre hesaplanan ortalama için;
    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır
    // c- Finalden 70 ve üstü alındığında ortalama 50 nin altında kalsa bile dersten geçilsin

let vize1,vize2,final,vizort,totalort;
vize1 = 10;
vize2 = 10;
final = 71;
vizort = (vize1+vize2)/2;
// console.log(vizort);
totalort = vizort*0.4+final*0.6;
// console.log(totalort);

// a 
if(totalort>50){
    console.log("dersten geçtiniz");
}else{
    console.log("dersten kaldınız");
}
// b 
if(totalort>50 && final>=50){
    console.log("dersten geçtiniz");
}else{
    console.log("dersten kaldınız");
}

// c 
if((totalort>50 && final>=50)|| final>70){
    console.log("dersten geçtiniz");
}else{
    console.log("dersten kaldınız");
}
