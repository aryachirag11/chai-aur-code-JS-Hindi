// based on how data is stored and accessed in the memory , datatypes are 
// divided into two categories
// 1. primitive data types => string, number, boolean, null, undefined, symbol, BigInt
// 2. non-primitive data types =>  array, objects, functions,    

//  NOTE: JS is a dynamically typed language, all type checks are performed in runtime.


 let id = Symbol("123");
 let id2 = Symbol("123");

//  console.log(id);
//  console.log(id2);
// console.log(id === id2);  


// Non- primitive

let heroes = ["Ironman", "Thor", "Captain America"];
// console.log(heroes);
let heroesObject = {
    name: "Ironman",
    strength : "Flying",
    rank : 2
};
// console.log(heroesObject);

function checkTypes(arr) {
    console.log(typeof(arr));
}
checkTypes(heroes);
checkTypes(heroesObject);
checkTypes(checkTypes);