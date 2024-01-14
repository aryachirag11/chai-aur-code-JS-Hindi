// for of loop
const array = [1,2,45,"Chirag"];
const games = new Map();
games.set(1,"COD");
games.set(2,"GTA");
const languages = {
    js : 'Java Script',
    py : 'Python',
    ts : 'Type Script',
    cpp : 'C++'
}
for (const arr of array) {
    // console.log(arr);
}
for (const [key,value] of games) {
    // console.log(`${key} , and game is ${games}`);
}
for (const key in languages) {
    // console.log(`${key} is extension of ${languages[key]} `);
}

/// for each loop

const arr = ["JS","TS","PY","CPP"];
// console.log(arr);

arr.forEach((item, index, array) => {
    // console.log(`index of ${item} is ${index}`);
})
// console.log(arr);

const languageMapping = [
    { extension: '.js', language: 'JavaScript' },
    { extension: '.py', language: 'Python' },
    { extension: '.java', language: 'Java' },
    { extension: '.cpp', language: 'C++' },
    { extension: '.html', language: 'HTML' },
    // Add more entries as needed
  ];

  languageMapping.forEach((item) => {
    // console.log(`${item.extension} is the extension of a ${item.language} file`);
  });
  
//   console.log(languageMapping);
  

///// filter and  map and reduce

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const filteredBooks1 = books.filter((book) => book.publish >= 2000);
// books.filter((book) => book.publish >= 2000).forEach((item) => item.title);
// filteredBooks1.forEach((book) => console.log(book.title))
// console.log(filteredBooks1);

// array map
const nums = [1,2,3,4,5,6,7,8,9];

// const squareNums = nums.map((num) => num * num);

const marks = [90,78,95,60,45,50,70];

// const percentages = marks.map((mark) => mark / 95).map((mark) => Number((mark * 100).toFixed(2)));
const toppers = marks
                     .map((mark) => mark / 95)
                     .map((mark) => Number((mark * 100).toFixed(2)))
                     .filter((mark) => mark >= 80.00);
            
const grades = toppers.map((num) => {
    if(num > 95) return 'A';
    else if (num > 85) return 'B'; 
    else return 'C';
})
// console.log(squareNums);
// console.log(percentages);
// console.log(toppers);
// console.log(grades);



///array reduce

const myNum = [1,2,3,4,5,6];

const myTotal = myNum.reduce((acc , num) => {
    console.log(` acc : ${acc} and currVal : ${num}`);
    return acc + num;
}, 0);
// console.log(myTotal); 


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice =  shoppingCart.reduce( (acc, item) => acc + item.price, 0);

console.log(totalPrice);
