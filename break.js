// let text = "";

// for ( i= 0; i < 10; i++){
//     if(i === 4  ){
//         break;
//     }
//         text += "This number " + i + " has jumped over";

// }

// console.log(text)


// let text = "";

// for ( i= 0; i < 10; i++){
//     if(i === 4 ){
//         continue;
//     }
//         text += " This number " + i + " has jumped over";

// }

// console.log(text)


const car = ["Acura", "Audi", "Mazda", "BMW", "chrysler"];
let text = "";
list: {
    text += car[0] + " ";
    text += car[1] + " ";
    break list;
    text += car[2] + " ";
    text += car[3] + " ";
    text += car[4] + " ";
}
console.log (text);