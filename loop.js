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

let cars = ["Audi","Toyota", "Honda", "BMW","KIA"];
let i,len,text;

for(i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i]; 

}
console.log(text)