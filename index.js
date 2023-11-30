// let num1 = 10
// let num2 = 5
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// let sumEl = document.getElementById("sum-el")

// function add(){
//     let result = num1 + num2
//     sumEl.textContent =  "Sum:" + result
// }

// function sub(){
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }

// function div(){
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }

// function mul(){
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }

let player = {
    name : "Ibson",
    chips : 70
}
 

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards =[firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if(randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    renderGame()
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "you got blackjack"
        hasBlackjack = true
    }
    else if(sum > 21){
        message = "Game over"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }


}

function newCard(){
    // console.log("Drawing a new card from deck!")

    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum = sum + card
        cards.push(card)
        
    
        renderGame()

    }

}
