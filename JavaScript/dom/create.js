document.getElementById("horhor").style.color = "blueviolet"
const altp = document.getElementById("horhor").nextSibling.nextSibling

const newPar = document.createElement("p")
const text = document.createTextNode("Bu bir p elementidir")
newPar.appendChild(text)

const h4 = document.querySelector("h4")
h4.after(newPar)

altp.style.color = "tomato"
altp.className = "center"
document.querySelector(".center").style.color = "yellow"
const yusuf = altp.nextSibling.textContent.split("")
console.log(yusuf[7].text)