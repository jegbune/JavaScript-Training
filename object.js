var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello"

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){console.log("now driving");};


myCar.drive();

var myCar2 = {
    maxSpeed:70, 
    driver:"Net Ninja", 
    drive: function(speed, time){
        console.log(speed * time + "mps");
    }
};

console.log(myCar.maxSpeed);
myCar2.drive(50, 3);


// console.log(myCar.driver);

// myString.length;