//Boolean Logic Exercises
//Part 1 
//1-4, 6-7 === true (for #3: 10 % 3 = 1 which it truthy) #5 is false 
//Part 2
var isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
//1. should log "Keep it up!"
//2. when declared, the variable isLearning's initial value was true
var firstVariable;
var secondVariable = "";
var thirdVariable = 1;
var secretMessage = "Shh!";

if(firstVariable){
    console.log("first");
} else if(firstVariable || secondVariable){
    console.log("second");
} else if(firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");
}
//1.  should console.log third because the first 2 if statements are false, but the thrid else if is true (firstVariable(undefined===false) || thirdVariable(1===true) ) true || false === true 
//2. undefined
//3. falsey because it's undefined 
//4. empty string === falsey 
//5. positive integer is truthy (zero is falsey though!)

//Part 3
//1. 
if (Math.random() > .5){
  console.log("over .5");
} else {
  console.log("under .5")
}
//2. falsey values in js: 0, "", undefined, null, NAN, false

//Array Exercises 

//For each of the exercises below, assume you are starting with the following people array.

var people = ["Greg", "Mary", "Devon", "James"];
//1. 
for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
}
//2. 
people.shift() //removes Greg from people
//3. 
people.pop() //removes James from people 
//4.
people.unshift("Matt") //returns new length of array, adds Matt as first element
//5. 
people.push("Sarah") //again returns new length, adds Sarah as last element 
//6. 
for (var i = 0; i < people.length; i++) {
  if (i > 1) {
    break;
  }
  console.log(people[i]);
}
//7. 
people.slice(2); //returns array with everything following the 2nd element ("Mary")
//8.
people.indexOf("Mary"); //returns 1 
//9.
people.indexOf("Foo"); //returns -1 because Foo is not present in the people array
//10. 
people.splice(2, 1, "Elizabeth", "Artie") //returns removed element ("Devon") and adds "Elizabeth" and "Artie" after index 1 ("Mary")
//11.
var withBobby = people.concat("Bob"); //withBobby variable should return the people array with "Bob" added as the last element 

//Object Exercises 
var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//1. Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go"); 
//2. Change the difficulty to the value of 7.
programming.difficulty = 7; 
//3. Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
//4. Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
//5. Using a loop, iterate through the languages array and console.log all of the languages.
for (var i = 0; i < programming.languages.length; i++) {
  console.log(programming.languages[i]);
}
//6. Using a loop, console.log all of the keys in the programming object.
for (var key in programming) {
  console.log(key);
}
//7. Using a loop, console.log all of the values in the programming object.
for (var key in programming) {
  console.log(programming[key]);
}


 
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
  var days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return days[num];
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


//Part 3 Rock/Paper/Scissors  
//using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.

function rockPaperScissors(){

  function determineChoiceComputer(num){
    if(num <= .33) { 
      return "rock";
    } else if(num <= .66){
      return "paper";
    }  
    return "scissor";
  }

  var userChoice = prompt("Rock, Paper, or Scissor?").toLowerCase();
  var computerChoice = determineChoiceComputer(Math.random());


  var Acceptanswers = ["rock", "paper", "scissor"];

  if(userChoice === computerChoice){ 
    return "Tie!";
  }

  if(userChoice === "rock" && computerChoice === "paper"){
    return "You lose, computer beat you with " + computerChoice;
  }
  if(userChoice === "paper" && computerChoice === "scissor"){
    return "You lose, computer beat you with " + computerChoice;
  }  
  if(userChoice === "scissor" && computerChoice === "rock"){
    return "You lose, computer beat you with " + computerChoice;
  }

  return "You win!";
}


