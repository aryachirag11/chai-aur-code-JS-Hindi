// Immediately Invoked Function Expression

// function chai() {
//     console.log("Chai pee lo");
// };
// chai();

(function chai(userName) {
    console.log(`Chai peelo ${userName}`);
})("Chirag"); // its a good practice to add a semi-colon to stop the execution of the IIFE function

(() => {
    console.log("DB Conneted");
})();