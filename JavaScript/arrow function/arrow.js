// ES6 => JS

// const topla = (a,b) => a+b;

// console.log(topla(5,4));

// const yasHesapla = (dogumyılı) => 2022 -dogumyılı;
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

// Example ; Yaş Hesaplama;

// const calculateAge = (dgmyıl) => new Date().getFullYear() - dgmyıl;
// console.log(calculateAge(1992));

const fibo = n => {
    let fib1 = 1,fib2 = 1,sum = 0;
    for(let i = 3; i<=n; i++){
        sum = fib1+fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    if(n<=0){
        console.log("n should be bigger than 0");
    }else{

        console.log(`FİBONACCİ${n} = ${fib2}`);
    }
    
}
fibo(1);