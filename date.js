let d = new Date();
console.log(d);
let da = new Date("october 12, 2014 11:30:00");
console.log(da.toDateString());
console.log(da.toUTCString());
console.log(da.toISOString());
msec = Date.parse(d);
console.log(msec);
