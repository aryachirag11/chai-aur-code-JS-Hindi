  let score = "22";
  let alphaNumeric = "20SCSE";
  
  //console.log(typeof(score));

  let valueInNumber = Number(score);
  
  let num = Number(alphaNumeric);
  //console.log(num);

  //console.log(typeof(num));

  //console.log(typeof(valueInNumber))

  let valueInString = String(valueInNumber);
  //console.log(typeof(valueInString));

  // "33" => 33
  // "33abc" => NaN
  // true/false => 1/0
  // null => 0
  // udefined => NaN

  let isLoggedIn = "undefined";
  let booleanIsLoggedIn = Boolean(isLoggedIn);
  //console.log(booleanIsLoggedIn);
  //console.log(typeof booleanIsLoggedIn);

  // Boolean conversion
  // 1 => true, 0 => false
  // "" / null / undefined => false;
  // rest everthing is converted to true 

  let stringSample = null;
  let stringNumber = String(stringSample);
  console.log(stringNumber);
  console.log(typeof(stringNumber));