// Object literals

let mySym = Symbol("key1");
let user1 = {
    [mySym] : "myKey1",
    name : "Chirag",
    age : 22,
    id : 1180056,
    location: "Rohtak",
    isLoggedIN : false,
    offDays : ["Saturday", "Sunday"]
};

//accessing object elements

// console.log(user1.name);
// console.log(user1["location"]);
// console.log(user1.offDays);
// console.log( typeof user1[mySym]);

user1.location = "Greater Noida";
user1.offDays = ["Sunday","Monday"];

// console.log(user1);

Object.freeze();

// user1.name = "Shinu";

// console.log(user1);

user1.greeting = function(){
    console.log(`Hello ${this.name}!!`);
};
console.log(user1);

user1.greeting();