let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById('message-el')
// let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#card-el')

let message = "";

function startGame(){
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " ; 
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
    }
     
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
    let card = getRandomCard();
    //  let thirdCard = Math.float(Math.random * 11)
    sum += card;
    cards.push(card);
    renderGame();

}