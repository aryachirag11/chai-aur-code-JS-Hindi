// falsy values : fasle, 0, -0, BigInt n0, "", null, undefined, NaN
// truthy vlaues : except falsy values all are truthy vlaues
// Eg : "0",'false', " ", {},[] all truthy

// check whether a object is empty or not

const user  =   {};

if(Object.keys(user).length === 0){
    console.log("Empty");
}

// console.log(Object.keys(user).length);


// Nullish Coalescing Operator (??) : null operator

let s = " "
console.log(s);
s = (null || undefined) ?? "chirag";
console.log(s);

// ternary operator
const teaPrice = 100;
teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
