const accountId = 1180056;
let accountEmail = "aryachirag11@gmail.com";
var accountPassword = "Crazy@123#";
accountCity = "Rohtak";
let accountState;

// accountId = 1320006; not allowed
accountEmail = "avyukt24@gmail.com";
console.log(accountId);
console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var to declare variables because of the issue with block scope and function scope
*/

{
    let naam = "chirag";
}
console.log(naam);