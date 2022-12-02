//  var links = document.getElementsByTagName("a");

// for (i = 1; i <= links.length; i++) {

//     console.log("This is link number " + i);

// }

// document.write("all links now looped")
//var i =0
// for (var i = 0; i < 10; i++) {

//     if(i === 5 || i === 3) {
//         continue;
//     }
//     console.log(i);

//     if(i === 7) {

//         break;
//     }
// }

// console.log("I have broken out of the loop")

// var link = document.getElementsByTagName("a");
// var i = 0;
// while (i <= link.length) {

//     link[i].className = "link-" +i;
//     i++
// }
var a = "6";
var b = 5;
console.log(a + b);
console.log(typeof (a + b));
console.log(Math.round(7.5));
console.log(Math.floor(7.5));
console.log(Math.ceil(7.1));
console.log(Math.max(7,5,10,8,10.1));
console.log(Math.PI);
if(isNaN(a)) {
    console.log("That isnt even a number thicie");

}else{
    console.log("meaning of life is " + (a * b));
}
if(!isNaN(a)){

    console.log("This is not (not a Number) " + (a * b));

}else{
    console.log("this is a not number")
}


