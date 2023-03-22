// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you ! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "same here!",
//     "Great to hear",
//     "Thanks"
// ]

// for (let i = 0; i < messages.length; i++) {
//     console.log(messages[i]);
// }

// let cards = [7,3,9];

// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i]);
// }

let sentence = ["Hello", "my", "name", "is", "Jeremiah"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
}