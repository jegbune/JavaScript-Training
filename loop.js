// let cars = ["Audi","Toyota", "Honda", "BMW","KIA"];
//  let result ="";

//  for (let i=0; i < cars.length; i++){
//     result += cars[i] + "<br>"
//  }
//  console.log(result)

// let result = "";
// for (i = 0; i < 5; i++){
//     result += " This is number " + i ;
// }
// console.log(result)

// let cars = ["Audi","Toyota", "Honda", "BMW","KIA"];
// let i,len,text;

// for(i = 0, len = cars.length, text = ""; i < len; i++) {
//     text += cars[i]; 

// }
// console.log(text)

// let i= 5;

// for (let i = 0; i < 10; i++){

// }
// console.log(i);


const person = {fname:"John", lname:"Doe", age:25};
const person1 = ["ade", "shola", "wale","austin"]
 let txt= "";
 for(let x in person) {
     txt += person[x];
     
 }
console.log(txt);

const numbers = [4,9,16,25,36,49]

let fig = " ";
for(let x in numbers){
    fig += numbers[x];
}

console.log(fig);
console.log(typeof fig);