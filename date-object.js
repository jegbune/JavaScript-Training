// var myDate = new Date()
// console.log(myDate)

// var myPastDate = new Date(1545, 11, 2);
// var myFutureDate = new Date(2515, 0, 31);

// console.log(myPastDate);
// console.log(myFutureDate);

var birthDay = new Date(1995, 5, 31);
var birthDay2 = new Date(1995, 5, 31);
console.log(birthDay.getFullYear());
console.log(birthDay.getMonth());
console.log(birthDay.getDay());
console.log(birthDay.getTime());

if (birthDay.getDate == birthDay2.getDate){
    console.log("birthday are equal")
}

else{
    console.log("Birthday are not equal")
}