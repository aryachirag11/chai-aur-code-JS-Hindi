function userLog(userName = "Chirag") {  // Chirag is the default value
  console.log(`${userName} logged in`);  
}

// userLog();
// userLog("Avyukt");

// 
function calculatePrice(val1, val2 ,...prices) {
    console.log(prices); // val1 = 10, val2 = 15
}

// calculatePrice(10,15,100,250);

const userOne = {
    userName : "Chirag",
    id : 118
}
function handleUser(user) {
    console.log(`${user.userName} has id : ${user.id}`);
}
// handleUser(userOne)


// *****************
const arr = [56,14,78.90];
function handleArray(...array) {
    array.sort((a,b) => a - b);
}
console.log(arr);
handleArray(arr);
console.log(arr);