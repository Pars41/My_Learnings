//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

const wait = (waitingTime) => {
  const starTime = new Date().getTime();
  while (new Date().getTime() < starTime + waitingTime) {}
};
console.log("async");
// alert("hi")  //blocking code

console.time("myTimer")

wait(3000); //blocking code
wait(200); //blocking code

console.timeEnd("myTimer")  //debug amaçlı kullanılabilir

console.log("hello spartsns");

// confirm("yes or no") //blocking code

//* Asenkron (setTimeout)
//*----------------------------------------------------
console.log("timeout started")
setTimeout(()=>{
    console.log("2 sec")
},2000)
console.log("timeout finished")
setTimeout(()=>{
    console.log("1 sec")
},1000)


//* Asenkron (setInterval, clearInterval)
//*----------------------------------------------------
let counter = 0;
let sec1 = setInterval(()=>{
    console.log(++counter)
    if(counter>10){
        clearInterval(sec1)
    }
},3000)