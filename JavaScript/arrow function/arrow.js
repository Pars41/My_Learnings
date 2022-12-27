// ES6 => JS

// const topla = (a,b) => {
//     sonuc = a+b;
//     console.log(sonuc);
    
// }

// topla(41,5);


// console.log(topla(5,4));

// const yasHesapla = (dogumyılı) => { 
//     return 2022 -dogumyılı;

// } 


// console.log(yasHesapla(1992));

// Void function (boş fonksiyon / birşey döndürmez)

// let selamver = () => alert("Merhaba arkadaşlar");
// selamver();


// Example ; Silindir hacmi;
// ************************************/

// const volume = (r,h) => Math.PI * r *r *h;
// console.log(volume(5,12).toFixed(3));
// console.log(volume(5,12).toPrecision(7));
// console.log(volume(5,12).toExponential(5));
// console.log(volume(5,12));

// Example ; Yaş Hesaplama;

// const calculateAge = (dgmyıl) => new Date().getFullYear() - dgmyıl;
// console.log(calculateAge(1992));
// console.log(new Date());

// const fibo = n => {
//     let fib1 = 1,fib2 = 1,sum = 0;
//     for(let i = 3; i<=n; i++){
//         sum = fib1+fib2;
//         fib1 = fib2;
//         fib2 = sum;
//     }
//     if(n<=0){
//         console.log("n should be bigger than 0");
//     }else{

//         console.log(`FİBONACCİ${n} = ${fib2}`);
//     }
    
// }
// fibo(7);


// RECURSION FUNCTION
// Fonksiyonun kendisini çağırmasına recursiflik denir
// FAKTORYEL döngü kullanarak
// const faktoryel = n => {
//     if(n<0){
//         console.log("Satı 0 veya daha büyük bir sayı olmalıdır");
//     }else if(n === 0 || n === 1){
//         console.log(`${n}! = 1`);
//     }else{
//         let sum = 1;

//         for(let i = 1; n>=i ; i++){
//             sum = sum*i
//         }
//         console.log(`${n}! = ${sum}`);

//     }
// }
// faktoryel(4);

// const faktoryel = n => {
//     if(n<0){
//         return "Sayı 0 veya daha büyük bir sayı olmalıdır";
//     }else if(n === 0 || n === 1){
//         return 1;
//     }else{
//          return n* faktoryel(n-1);
//     }
// }
// console.log(faktoryel(3));


const faktoryel = n => {
    if(n<0){
        console.log("Sayı 0 veya daha büyük bir sayı olmalıdır"); 
    }
    else if(n === 0 || n === 1)
    {
        return 1; 
    }
    else
    {
         return n* faktoryel(n-1);
    }
}
console.log(faktoryel(4));
