// let text = "";

// for ( i= 0; i < 10; i++){
//     if(i === 4  ){
//         break;
//     }
//         text += "This number " + i + " has jumped over";

// }

// console.log(text)


let text = "";

for ( i= 0; i < 10; i++){
    if(i === 4 ){
        continue;
    }
        text += " This number " + i + " has jumped over";

}

console.log(text)