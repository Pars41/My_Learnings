// ES6 => JS

const topla = (a,b) => a+b;

console.log(topla(5,4));

const yasHesapla = (dogumyılı) => 2022 -dogumyılı;
console.log(yasHesapla(1992));

// Void function (boş fonksiyon / birşey döndürmez)

// let selamver = () => alert("Merhaba arkadaşlar");
// selamver();


// Example ; Silindir hacmi;
// ************************************/

const volume = (r,h) => Math.PI * r *r *h;
console.log(volume(5,12).toFixed(3));
console.log(volume(5,12).toPrecision(7));
console.log(volume(5,12).toExponential(5));
