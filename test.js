 var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++) {

    console.log("This is link number " + i);

}

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

var links = document.getElementsByTagName("a");

for (i = 0; i <= links.length; i++) {

    links[i].className = "link-" +i;

}