let d = new Date();
console.log(d);
// let da = new Date("october 12, 2014 11:30:00");
// console.log(da.toDateString());
// console.log(da.toUTCString());
// console.log(da.toISOString());
// msec = Date.parse(d);
// console.log(msec);
let month = ["January","Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log(d.getFullYear())
console.log(d.getMonth() + 1)
console.log(month[d.getMonth() ])
console.log(d.getDate())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())


