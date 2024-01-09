 // Date is JS

 let myDate = new Date();
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toISOString());
//  console.log(myDate.toLocaleString());
//  console.log(myDate.toJSON());

//formats to create date
let newDate = new Date(2024, 0, 8,16,15,30);
// let newDate = new Date("08-01-2034");

// console.log(newDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myTimeStamp - newDate.getTime());

let currentDate = new Date();
console.table(currentDate.toLocaleString('default',{
    weekday : "long",
    hour: "numeric",
    month : "long",
    year : "numeric",
    day: "2-digit"
}));





