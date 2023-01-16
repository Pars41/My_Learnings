const yourChoice = document.getElementById("your-choice")

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
const select = document.querySelector(".select")


select.addEventListener("click", (e)=>{
    // console.log(e.target.className);
    // console.log(e.target.getAttribute("alt"));
    // yourChoice.innerHTML = e.target.getAttribute("alt")
    userSelect = e.target.getAttribute("alt")
    yourChoice.innerHTML = `<img src="./assets/${userSelect}.png"></img>`;
    console.log(yourChoice,userSelect)
})
