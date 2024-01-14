// let user  = {
//     userName : "Chirag",
//     id : 118,
//     greeting : function () {
//         console.log(`${this.userName}, welcome aboard`);
//     }

// }
// user.greeting();

console.log(this); // empty object

const myFunction = function () {
    console.log( typeof this); // it return a object with different properties
    
}
// myFunction();

// *********** Arrow Function ***************

const addTwo =  (num1, num2) =>  num1 + num2;


console.log(addTwo(10,-20));