// let youLikeMeat = false
// myNum = 8

// if(youLikeMeat) {

//     console.log("You like meat")

// }
// else{
// console.log("You hate meat")
// }
/*let myAge =900;
if (myAge > 30) {

    console.log(" you are over 30")

}
else if( myAge > 20) {

    console.log(" you are over 20")

}
else if(myAge > 10) {
    console.log(" you are over 10!")
}
else{
    console.log ("you are not over 10!")
}*/
let d = new Date(2023, 0, 14, 23, 47, 0)
if(d.getHours() < 12){
    console.log("Good Morning")
}
else if(d.getHours() < 16){
    console.log("Good Afternoon")
}

else if(d.getHours() > 16){
    console.log("Good Evening")
}
