// console.log(this);

var myCar2 = {
    maxSpeed:70,
    driver:"Net Ninja",
    drive: function(speed, time){
        console.log (speed * time);
        },
        test: function(){
            console.log(this);
        }
    }


    var  myCar3 = {
        maxSpeed:70,
        driver:"Shaun",
        drive: function(speed, time){
            console.log (speed * time);
            },
            // test: function(){
            //     console.log(this);
            // },
            logDriver: function(){
                console.log("driver name is " + this.driver);
            }
        }

myCar3.logDriver();
myCar3.test();        
myCar2.test(); 
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);