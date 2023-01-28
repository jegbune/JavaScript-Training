const myNumber = [23,12,45,65,34,3,90]
let txt = "";
myNumber.forEach(myfunction);
console.log(txt)
function myfunction(value, array, index){
    txt += value; 
}