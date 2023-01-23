// let myDetail = {
//     myName: "Jeremiah",
//     institution: "Yaba College of Technology",
//     level: function( degree, years){
//         console.log(degree * years)
//     },
//     course: "Electrical Engineering",
//     myLevel: function(){
//         console.log("I am in level " + this.level())
//     },

// }
// myDetail.level(200,2);
// myDetail.myLevel();



// var myCar = {

//     maxspeed: 70,
//     driver: "uber",
//     drive: function(speed, time){
//         console.log(speed * time)
//     },
//     logDriver: function(){
//         console.log("The driver's name is " + this)
//     }
// }


var Car = function(maxSpeed, driver){

    this. maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);

    }
this.logDriver = function(){
    console.log(this)
    // console.log("The driver name is " + this.driver)
}
}


var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(40, "Humpty Dumpty");
var myCar3 = new Car(10, "Shaun");
var myCar4 = new Car(90, "James Bond");

myCar.drive(30, 5);
myCar3.logDriver();
