// function sum (){


//     var add = (a+b);
//     return add;
// }
// sum (2,3,3,4,5,6,7,8,8)
function add(){
    
    let sum = 0;
    
    for( i = 0; i <arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum)
    return sum;

}

add(1,2,3,4,5,6,7,100)

function myFunction(){
    let text = document.getElementById("word").innerHTML;
    document.getElementById("word").innerHTML =text.replace("Microsoft", "Jerxpress");

}
