//Abner Dos Santos Almeida 76030
const btn = document.getElementById("btn")
const colorValue = document.getElementById("color-value")
const section = document.getElementById("color-section")

const hex = [
"0","1","2","3","4","5","6","7","8","9",
"a","b","c","d","e","f"
]

btn.addEventListener("click", function(){

let randomColor = "#"

for(let i = 0; i < 6; i++){

randomColor += hex[Math.floor(Math.random()*16)]

}

colorValue.textContent = randomColor

section.style.backgroundColor = randomColor

})