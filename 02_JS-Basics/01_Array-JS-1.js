 // Arrays

 let myArray = [2,5,7,"Chirag",true];
 let array2 = new Array(0,1,2,3,4,5);
//  console.log((myArray));
//  console.log(array2);

 // Array Methods

//  array2.push(19);
//  array2.push(24);
//  array2.pop();
// //  array2.unshift(99);
// array2.shift()
//  console.log(array2);

// console.log(myArray.includes(2));
// console.log(myArray.indexOf(10));

// slice and splice

console.log("A => ", array2);

let arr1 = array2.slice(1,3);
console.log("B => ", arr1, "Original Array : ", array2);

let arr2 = array2.splice(1,3);
console.log("C => ", arr2,"Original Array : ", array2);
