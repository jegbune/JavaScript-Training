let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById('message-el')
// let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')

let message = "";

function startGame(){
    renderGame();
}

function renderGame() {

    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wahoo! you've got Blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false
    }
    
    //CASH OUT
    messageEl.textContent = message;

}

function newCard() {
    // alert("Drawing a new card from the deck!");
    let card = 7;
    //  let thirdCard = Math.float(Math.random * 11)
    sum += card;
    
    renderGame();

}