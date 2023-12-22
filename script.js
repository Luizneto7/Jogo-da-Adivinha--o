const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const randomNumber = Math.round(Math.random() * 10)
let xAttepmpts = 1

function handleTryClick(event) {
    event.preventDefault()

   const inputNumber = document.querySelector("#inputNumber")

   if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        
        screen2.querySelector("h2").innerText = `Acertou em ${xAttepmpts} tentativas!`
    } 
    
    if(xAttepmpts == 1){
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttepmpts} tentativa!`
    }

    inputNumber.value = ""
    xAttepmpts++
}

const btnTry = document.querySelector("#btnTry")
const btnTryAgain = document.querySelector("#btnTryAgain")

btnTry.addEventListener('click', handleTryClick)
btnTryAgain.addEventListener('click', function(){
    screen2.classList.add("hide")
    screen1.classList.remove("hide")
    xAttepmpts = 1
})