function myFunction(){
    let userOne = "Chirag"; // block scope
    var userTwo = "Dinesh"; // function scope
    const userThree = "Shruti"; //block scope
}

let a = 10;
let b = 10
{
    let a = 20; // block scope
    let b = 30;
    // console.log(a);
}
b = b + 50;
// console.log(a);
// console.log(b);

// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);

function letPlay() {
    let userName = "Chirag";
    function innerPlay() {
        let user1 = "Dinesh";
        console.log(userName); // child scope has access to parent scope
    }
    // console.log(user1); // parent scope doesn't have access to child scope
    innerPlay();
}
// letPlay();

////// interesting

console.log(addOne(5));

 function addOne(num) {
    return num + 1
 }

console.log(addTwo(10))

 let addTwo = function(num) {
    return num + 2
 }
 