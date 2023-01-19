// for (i = 0; i < 10; i++) {
    
    
//     if( i === 5 || i === 3) {
        
//         continue;
    
//     };

//     console.log(i);

console.log(d)
    
//     if(i === 7){
//          break;
//      }
// }

// console.log("I have broken out of the loop")


// const cars = ["Acura", "BMW", "VOLVO", "FORD", "Audi", "FIAT", "SAAB"]
// let text = "";

// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }
// console.log(text);


let d = new Date();

if (d.getHours() < 12){
    console.log("Good Morning");
}
else if(d.getHours() > 12){
    console.log("Good Afternoon");
}
else if(d.getHours() > 16){
    console.log("Good Evening");
}