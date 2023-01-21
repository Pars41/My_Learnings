let spaN = document.querySelectorAll(".numb")
let alkali = document.getElementById("alkali")
alkali.addEventListener("click",function(){
    spaN.forEach((e)=>{
        if(e.innerHTML != 3  && e.innerHTML != 11 && e.innerHTML != 19 && e.innerHTML != 37 && e.innerHTML != 55 && e.innerHTML != 87){
         e.parentElement.classList.toggle("silik")
        }
         
     })
})
let div = document.querySelectorAll("div")

div.forEach((e)=>{
    e.addEventListener("click",function(e){
        e.target.classList.add("bigger")
    })
})