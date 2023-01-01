let fruits = ["Banana", "Pineapple", "Apple", "Carrot", "Mango"];
fruitUpdate = fruits.sort();
console.log(fruitUpdate);
fruits.reverse();
console.log(fruits);

myNumber = [23, 40, 10, 4, 50, 80];
myNumberUpdate = myNumber.sort(function(a,b){return(a-b)});
console.log(myNumberUpdate);
myNumber.sort(function(a, b){return(b-a)});
console.log(myNumber);

const over18 = myNumber.filter(myFunction);

function myFunction(value){
    return value > 25;

}
console.log(over18)
let txt = ""
myNumber.forEach(myfunction1);

function myfunction1(value){
    txt += value + "<br>";
}
console.log(txt);

let above18 = myNumber.every(myFunction2)
function myFunction2(value, index){
    return value < 3;
}
console.log("All over 18 is " + above18);