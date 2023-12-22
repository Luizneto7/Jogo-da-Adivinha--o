const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector("#btnTry")
const btnTryAgain = document.querySelector("#btnTryAgain")
let randomNumber = Math.round(Math.random() * 10)
let xAttepmpts = 1

btnTry.addEventListener('click', handleTryClick)
btnTryAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetEnter)

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

function handleResetClick(){
    toggleScreen();
    xAttepmpts = 1;
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen(){
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}

function handleResetEnter(e){
    if(e.key = 'Enter' && screen1.classList.contains("hide")){
        handleResetClick();
    }
}