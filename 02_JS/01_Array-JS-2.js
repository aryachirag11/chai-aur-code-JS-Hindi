let marvel = ["Thor", "Ironman", "Captain America"];
let dc = ["Superman", "Batman", "Aquaman"];

let allHeroes = marvel.concat(dc);
let Heroes = [...marvel, ...dc];
// console.log(allHeroes);
// console.log(Heroes);

let messyArray = [1,2,[4,6,[8,9,[10,12,[2.2],99],100],110],1000];
let cleanArray = messyArray.flat(Infinity);
// console.log("Messy Array => ", messyArray);
// console.log("Clean Array => ", cleanArray);

console.log(Array.isArray("Chirag"));
console.log(Array.from("Chirag"));
console.log(Array.of(marvel,dc,cleanArray));

