//Function Exercises

//Part 1 : 
//difference
function difference(num1, num2) {
  return num1 - num2;
}

//product
function product(a, b {
  return  a * b;
}

//print day
function printDay(num) {
  var dates = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return dates[num];
}

//lastElement

function lastElement(arr) {
  return arr[arr.length - 1];
}

//numberCompare
function numberCompare(a, b) {
  if (a === b){
    return 'numbers are equal';
  } else if(a > b){
    return 'first is greater';
  }
  return 'second is greater';
}

//singleLetterCount
function singleLetterCount(str, letter) {
  var count = 0;
  for (var i= 0; i< str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

//Part 2:

//multipleLetterCount
function multipleLetterCount(str) {
  var finObj = {};
  for (var i =0; i< str.length; i++) {
    if (!(str[i] in finObj)) {
        finObj[str[i]] = 1;
    } else {
      finObj[str[i]]++;
    }
  }
  return finObj;
}

//arrayManipulation
function arrayManipulate(arr, command, position, val) {
  if (command === "remove") {
    if (position === "end") {
      return arr.pop();
    }
      return arr.shift();
  }
  else if (command === "add") {
    if (position === "end") {
      arr.push(val)
      return arr;
    }
    arr.unshift(val)
    return arr;
  }
}


//isPalindrome
function isPalindrome(string) {
  var lowString = string.toLowerCase();
  for (var i = 0; i < lowString.length; i++) {
     var lastChar = lowString[lowString.length - 1 - i];
    if (lowString[i] !== lastChar) {
      return false;
    }
  }
  return true;
}


//Part 3 Rock/Paper/Scissors coming soon! 
