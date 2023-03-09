// let count = 5; 
// console.log(count);

// let myAge = 23;

// console.log(myAge + count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count




let count = document.getElementById('count-el');

console.log(count);

let add = 0;
function increment(){
    add = add + 1;
    
    count.innerText = add;
}


function save() {  
    console.log(count)
}



// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()




// let lap1 = 34;
//     lap2 = 33;
//     lap3 = 36;
    
// function sumVar(){

//     console.log(lap1+lap2+lap3)

// }    
// sumVar()



// let lapsCompleted = 0;

// function incrementLap() {
//      lapsCompleted = lapsCompleted + 1;
//     }
    
// incrementLap()
// incrementLap()
// incrementLap()
// incrementLap()
 
// console.log(lapsCompleted)