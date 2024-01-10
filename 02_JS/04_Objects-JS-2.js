// Object Constructor


let obj1 = {1 : "A", 2 : "B", 3 : "C"};
let obj2 = {4 : "D", 5 : "E", 6 : "F"};
// let obj3 = {...obj1, ...obj2};
let obj3 = Object.assign({}, obj1, obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.values(obj2));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty('5'));