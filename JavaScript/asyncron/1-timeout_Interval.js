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
    console.log(counter++)
    if(counter>10){
        clearInterval(sec1)
        console.log("timer stopped")
    }
},10)





//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
    console.log("john:Hi")
    setTimeout(() => {
      console.log("Sarah: Hello")
      setTimeout(() => {
        console.log("John: How Are you?")
        setTimeout(() => {
          console.log("Sarah:Fine and you?")
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
  
  //? COZUMLER:
  //?----------------------------------------------------
  //* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
  //? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  //* 2- Promise,
  //! 3- Fetch API (Promise'in basitlestirilmis hali),
  //! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)