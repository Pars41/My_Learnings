
// const tasImage = document.querySelector(".tas")
// const kagitImage = document.querySelector(".kagit")
// const makasImage = document.querySelector(".makas")


// tasImage.addEventListener('click',()=>{
//     yourChoice.innerHTML = '<img src="./assets/tas.png"></img>'
// })
// kagitImage.addEventListener('click',()=>{
//     yourChoice.innerHTML = '<img src="./assets/kagit.png"></img>'
// })
// makasImage.addEventListener('click',()=>{
//     yourChoice.innerHTML = '<img src="./assets/makas.png"></img>'
// })
let userSelect;
let pcRandom; 


const yourChoice = document.getElementById("your-choice")
const pcChoice = document.getElementById("pc-choice")
const select = document.querySelector(".select")


select.addEventListener("click", (e)=>{
    // console.log(e.target.className);
    // console.log(e.target.getAttribute("alt"));
    // yourChoice.innerHTML = e.target.getAttribute("alt")
    userSelect = e.target.getAttribute("alt")
    yourChoice.innerHTML = `<img src="./assets/${userSelect}.png"></img>`;
    // console.log(yourChoice,userSelect)
    pc()
})

const pcArr = ["tas","kagit","makas"]

function pc(){
    pcRandom = pcArr[Math.floor(Math.random()*3)]
    console.log(pcRandom)
    pcChoice.innerHTML  = `<img src="./assets/${pcRandom}.png"></img>`
    result()
}

function result(){
    
}