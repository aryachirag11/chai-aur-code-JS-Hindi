// strings come under primitive datatype

// modern way of using strings : string interpolation

let naam = "Chirag";
let repoCount = 18;

console.log(`My name is ${naam} and I have ${repoCount} repositories`);

naam = "Chirag Arya";

// console.log(naam.length);
// console.log(naam.charAt(4));
// console.log(naam.indexOf('A'));
// console.log(naam.includes('Arya')); // case sensitive

// difference between slice and substring
/*
The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. 
The slice() method returns an empty string if this is the case.
*/
console.log(naam.substring(6,2)); // 'irag'
console.log(naam.slice(6,2)); // ''

// If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
// slice() also treats NaN arguments as 0, but when it is given negative values 
// it counts backwards from the end of the string to find the indexes.

console.log(naam.substring(-5,2)); // Ch
console.log(naam.slice(-5,-2));    // Ar 

let spacedString  = "   Hello World !     ";
console.log(spacedString.trim());

let url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace";
console.log(url.replace('/', '-')); // it repalces the firts occurence
console.log(url.replaceAll('/','-')); // it replaces all the occurences

// split()
const str = "My name is Avyukt Rohilla";
console.log(str.split(''));// ['M', 'y', ' ', 'n', 'a', 'm','e', ' ', 'i', 's', ' ', 'A','v', 'y', 'u', 'k', 't', ' ','R', 'o', 'h', 'i', 'l', 'l','a']
console.log(str.split(' ')); //[ 'My', 'name', 'is', 'Avyukt', 'Rohilla' ]
console.log(str.split(' ',3)); // [ 'My', 'name', 'is' ]

// 