let myNumber = [20, 13, 14, 50, 2, 30];
let sum = myNumber.reduce(myResult)

function myResult(total, value){
    return total + value;

}
console.log(sum);