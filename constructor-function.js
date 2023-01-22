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



var myCar = {

    maxspeed: 70,
    driver: "uber",
    drive: function(speed, time){
        console.log(speed * time)
    },
    logDriver: function(){
        console.log("The driver's name is " + this)
    }
}

myCar.logDriver()