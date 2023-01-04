//ARRAY ITERATION*******************

//forEach*************
const prices = [100,250,50,89]

prices.forEach( price => console.log(price) )

let sum = 0;
prices.forEach(p => sum+=p)
console.log("SUM:",sum);


// forEach bir void function dur geriye birşey döndürmez!!!


// prices dizisindeki her bir ara toplam değeri yazdırınız
//her bir fiyata %10 zam yapınız
let total = 0
let arr = []
prices.forEach((p,i,)=> {
    total += p
    console.log(`${i}. iteration: ${total}`);

    arr[i] =Math.trunc( p*1.1)
})
console.log(arr);