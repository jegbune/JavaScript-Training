let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;

    default:
        day = "looking forward to weekdays";
        break;
    
}
console.log("Today is " + day);
let fruits = "mango";
switch (fruits){
    case "Orange" :
        Text ="Yes";
        break;
    case "mango" :
        Text = "Available";
        break;    
        default:
            Text ="fruit not stated";
            break;
}

console.log(Text)