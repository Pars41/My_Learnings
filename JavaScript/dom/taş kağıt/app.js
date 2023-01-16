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

//değişkenler variables

let userSelect;
let pcRandom;

const yourChoice = document.getElementById("your-choice");
const pcChoice = document.getElementById("pc-choice");
const select = document.querySelector(".select");

const scoreYou = document.getElementById("you");
const scorePc = document.getElementById("pc");

// Modal Selectors
const resultDiv = document.querySelector(".result-msg");
const containerEl = document.querySelector(".container");
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");

select.addEventListener("click", (e) => {
  // console.log(e.target.className);
  // console.log(e.target.getAttribute("alt"));
  // yourChoice.innerHTML = e.target.getAttribute("alt")
  if (e.target.getAttribute("alt")) {
    //boşlukta null çıkmasın deyu
    userSelect = e.target.getAttribute("alt");
    yourChoice.innerHTML = `<img src="./assets/${userSelect}.png"></img>`;
    // console.log(yourChoice,userSelect)
    pc();
  }
});

const pcArr = ["tas", "kagit", "makas"];

function pc() {
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  // console.log(pcRandom)
  pcChoice.innerHTML = `<img src="./assets/${pcRandom}.png"></img>`;
  result();
}

function result() {
  switch (userSelect) {
    case "tas":
      if (pcRandom == "kagit") {
        lost();
      } else if (pcRandom == "makas") {
        win();
      }
      break;

    case "kagit":
      if (pcRandom == "makas") {
        lost();
      } else if (pcRandom == "tas") {
        win();
      }
      break;

    case "makas":
      if (pcRandom == "tas") {
        lost();
      } else if (pcRandom == "kagit") {
        win();
      }
      break;

    default:
      break;
  }
  if(userSelect == pcRandom){
    resultDiv.classList.add("active");
    resultDiv.innerHTML = "It's a draw";
    containerEl.style.boxShadow = "3px 3px 10px 1px #FFC538";
    resultDiv.style.backgroundColor = "#FFC538";
  
  }
}

function lost() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You lost";
  containerEl.style.boxShadow = "3px 3px 10px 1px #fb778b";
  resultDiv.style.backgroundColor = "#fb778b";
  scorePc.innerText++;
}

function win() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You win";
  containerEl.style.boxShadow = "3px 3px 10px 1px #5AB7AC";
  resultDiv.style.backgroundColor = "#5AB7AC";
  scoreYou.innerText++;
}

