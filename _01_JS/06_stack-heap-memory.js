// In JS have there are two types of memory;
// Stack memory : handles primitive datatype 
// Heap memory : hhandles non-primitive datatype

// Demonstration of stack memory

let naam = "Chirag";
let dusraNaam = naam; // a copy of naam is assigned to dusraNaam

// before change
console.log("Before Change");
console.log(naam);
console.log(dusraNaam);

dusraNaam = "Shinu";  //only dusraNaam is updated 
// after change
console.log("After Change");
console.log(naam);
console.log(dusraNaam);


// Demonstration of stack memory
let userOne = {
    userName : "Chirag",
    userEmail : "aryachirag11@gmail.com"
};

let userTwo = userOne; // reference of userOne is passed to userTwo

// console.log("Before Change");

// console.table(userOne);
// console.table(userTwo);

userTwo.userEmail = "aryashinu03@gmail.com"; // change is userTwo is reflected in both userOne and userTwo

// console.log("After Change");

// console.table(userOne);
// console.table(userTwo);

