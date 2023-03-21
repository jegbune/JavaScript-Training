let hands = ["rock","paper", "scissor", "pen", "ruler"]; 

function getRandomNumbers(){
    let randomNumber = Math.floor(Math.random()*hands.length);
   return (hands[randomNumber])
}

console.log(getRandomNumbers())