//Intermediate JavaScript Exercises
//Debugging Exercises

//What does the throw keyword do?
//	---The throw keyword returns an error and stops code execution, can also add a message
What does the finally keyword do?
//	---whatever is put inside the finally block will be executed no matter error is being thrown
What is the difference between a TypeError and ReferenceError?
//	---A reference error happens when you attempt to access a variable outside it's scope. A type error happens when you use a type incorrectly, ex: invoking something that isn't a function,
How do you create a snippet in the Chrome dev tools?
//	---Open up Chrome dev tools and click the sources tab, click the snippets tab on the left column, right click or click new snippet, command s to save (*means not saved!)
In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
//	---An exception is an error, so pause on exception would just stop when running into an error
How do we "catch" errors in JavaScript? Give an example with code for what that might look like.
// ---Try/Catch staments. Placing code inside a try block, if an error occurs the code is moved to the catch block, after catch block the code continues to run.
try {
	something + 5;
} catch(e) {
	console.log("Error is ", e);
}

//Explain what type of error will be thrown, why the error is occuring, and how to fix it:

//1.
//person; // ReferenceError b/c person is not previously defined
var person = "someone";
// or just
var person;
//2.
var data = {};
//data.displayInfo(); // TypeError data.displayInfo is not a function
data.displayInfo = function () {
	console.log(data);
}
//3.
//var data = {};
//data.displayInfo.foo = "bar"; // TypeError, b/c foo is undefined you can't assign a property to it
var data = {};
data.displayInfo = {};
data.displayInfo.foo = "bar";
//4.
function data(){
    var thing = "foo";
}
data();
//thing;  //ReferenceError - thing variable is only defined within the data function, you could make thing a global variable, but that probably wouldn't be a good idea
//it would look like this
function data(){
	thing = "foo";
}
//Best practice wise, I would just call the data function, or define the thing variable outside the data function

//Part 2

//Fix the broken code and explain what went wrong
//1.
for(var i=0; i > 5; i++){ // i will never be greater than 5 when initialized at 0
    console.log(i);
}
for (var i = 0; i < 5; i++) { //just changed > to <
	console.log(i);
}
//2.
function addIfEven(num){
    //if(num % 2 = 0){ // assigning 0 not === so should throw a ReferenceError
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}

//3.
function loopToFive(){
    // for(var i=0, i < 5, i++){ //these are commas, should be ;
    for (var=0; i < 5; i++){
        console.log(i);
    }
}

//4.
// function displayEvenNumbers(){
//     var numbers = [1,2,3,4,5,6,7,8];
//     var evenNumbers = [];
//     for(var i=0; i<numbers.length-1; i++;){
//         if(numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }

    }
    return evenNumbers;
}
displayEvenNumbers();

//Nested Object Exercises
//Part I

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

//1. Using a for loop, console.log all of the numbers in the primeNumbers array.
for (var i =0; i < nestedData.innerData.numberData.primeNumbers.length; i++){
    console.log(nestedData.innerData.numberData.primeNumbers[i]);
}
//2. Using a for loop, console.log all of the even Fibonnaci numbers.
for (var i =0; i < nestedData.innerData.numberData.fibonnaci.length; i++){
    if (nestedData.innerData.numberData.fibonnaci[i] % 2 === 0){
        console.log(nestedData.innerData.numberData.fibonnaci[i]);
    }
}
//or
var fibonArray = nestedData.innerData.numberData.fibonnaci

for (var i = 0; i < fibArray.length; i++) {
    if(fibonArray[i] % 2 === 0){
        console.log(fibonArray[i])
    }
}

//3. Console.log the value "second" inside the order array.
console.log(nestedData.innerData.order[1]);
//4. Invoke the addSnack function and add the snack "chocolate".
nestedData.innerData.addSnack("chocolate");
//5. Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [1,3,5,7,9],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        console.log("What is this?", this)
        this.snacks.push(snack);
        return this;
    }
  }
}
//Nested Objects
//Given the following nested object:
var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}
//Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
function addSpeaker(speakerName){
  nestedObject.speakers.push({name: Speaker})
}
//Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
function addLanguage(lang) {
    nestedObject.data.languages[english] = {
        hello: hello
    }
}
//Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.

function addCountry(name, capital, population) {
  nestedObject.data.continents.europe.countries[name] = {
    capital: capital,
    population: population
  }
}

//Nested Array Exercises

//Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.
function rotate(arr, num) {
    var howManyMoves = num % arr.length;
    for (var i = 0; i < howManyMoves; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}


//Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".
function makeXOGrid(row, column) {
  var endArr = [];
  var lastPushed = "O";
  for (var i = 0; i < row; i++) {
    var rowArr = [];
    for (var j = 0; j < column; j++) {
      if (lastPushed === "X") {
        rowArr.push("O");
      } else {
        rowArr.push("X");
      }
      lastPushed = rowArr[j];
    }
    endArr.push(rowArr);
  }
  return endArr;
}

//Higher Order Functions Exercises
//Each
function each(arr, callback){
    for (var i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
}
//map
function map(arr, func) {
  var endArr = [];
  for (var i = 0; i < arr.length; i++) {
    endArr.push(func(arr[i]));
  }
  return endArr;
}
//reject
function reject(arr, fun) {
  var endArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!fun(arr[i])) {
      endArr.push(arr[i]);
    }
  }
  return endArr;
}

//Timer Exercises

//1. What is the difference between setInterval and setTimeout?
//  ---setTimeout will only run callback function once, setInterval will run it an infinate amount of times (until the timer is cleared)
//2. What is the difference between using setInterval and a loop? Why would you want to choose one over the other?
//  ---setInterval will run the callback function an infinite amount of times in the time parameter, vs a loop will run a set amount of times. You can't tell a loop to hold off running for a certain amount of time. When you want to stop after a certain amount of time- say a game.
//3. What is the first parameter that setInterval and setTimeout accept?
//  ---A callback function!
//4. Why is it so important to store the result of setInterval and setTimeout in a variable?
//  ---the timer id sets how long the code will run, the timer id is the variable storing the result of setInterval and setTimeout
//5. What does asynchronous mean in the context of setTimeout and setInterval?
//  ---setTimeout and setInterval adjust the event queue, it allows you to manage your asynchronous code- the functions won't imediately be cleared from the call stack, but will send a message to the queue to run the result after the sepcified time.

//Closure Exercises
//1. What is a closure?
//  ---When a function can access other variables from an outer function that has already returned. A function that has access to private variables.
//2. List two reasons why closures are useful
//  ---You don't want all your variables to be in the global scope, then anyone can change them. You can reuse them easily.
//3. What is a module?
//  ---A small encapsulated piece of code that can be reused easily.
//4. What is the arguments array-like object?
//  ---The arguments keyword looks like an array, it has a length property, but it's an an array like object, you can't push to it, but it can be assessed with [] notation.
//5. Why do we call arguments an array-like-object?
//  ---Because it looks like an array with [], but it doesn't act like an array, you can't push to it.
//6. Write a function called createCounter. This function should contain a variable count that is initialized to 0. This function should return another function that when invoked, increments the counter by 1 and returns the count variable. You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.

function createCounter(){
    var counter = 0;
    return function(){
        return ++counter;
    }
}

var firstCounter = createCounter();
var secondCounter = createCounter();

//Higher Order Functions, Timers, Closures Exercises
//countdown
//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.
function countdown(num){
  var timerId = setInterval(function(){
    console.log(--num);
  },1000);
  setTimeout(function(){
    clearTimeout(timerId);
    console.log("Done!")
  },3000);
}
//randomGame
//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.
var counter = 0;

function randomGame(cb) {


  var timerId = setInterval(function(){
    var number = Math.random();
    if ( number > .75) {
    clearTimeout(timerId);
    console.log('done');
    cb(counter);
  }
    ++counter;
  }, 1000);
}

randomGame(function(c) {
    console.log('counter: ' + c);
});
//isEven
//Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
function isEven(num) {
    return num % 2 === 0;
}
//isOdd
//Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not
function isOdd(num) {
    return !isEven(num);
}

//isPrime
//Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false
function isPrime(num){
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
//numberFact
//Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it
function numberFact(num, cb) {
    return cb(num);
}

//find
//Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.
// find([8, 12, 7, 4, 5], isPrime) => 7
function find(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i];
        }
    }
}

//findIndex
//Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.
function find(arr, cb) {
	for (var i = 0; i < arr.length; i++) {
		if (cb(arr[i])) {
			return i;
		}
	}
}

//secialMultiply
//Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
function specialMultiply(x, y) {
  if (arguments.length === 2) {
    return x * y;
  } else if (arguments.length === 1) {
    return function(secondArg) {
      return x * secondArg;
    }
  }
}

//DOM Exercises
//Given the following HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>
//1. Select the section with an id of container without using querySelector.
var container = document.getElementById("container");
//2. Select the section with an id of container using querySelector.
var container = document.querySelector("#container");
//3. Select all of the list items with a class of "second".
var classSecond = document.getElementsByClassName("second");
//4. Select a list item with a class of third, but only the list item inside of the ol tag.
var classThirdInOlTag = document.querySelector("li.third");
//5. Give the section with an id of container the text "Hello!".
var container = document.getElementById("container");
container.innerText = "Hello!";
//6. Add the class main to the div with a class of footer.
var footer = document.getElementsByClassName("footer");
footer = footer[0];
footer.className = "footer main";
//7. Remove the class main on the div with a class of footer.
footer.className = "footer";
//8. Create a new li element.
var newLiEl = document.createElement("li");
//9. Give the li the text "four".
newLiEl.innerText = "four";
//10. Append the li to the ul element.
var ul = document.getElementsByTagName("ul")[0];
ul.appendChild(newLiEl);
//11. Loop over all of the lis inside the ol tag and give them a background color of "green".
var lisInOl = document.querySelectorAll("ol li");
for (var i = 0; i < lisInOl.length; i++) {
	var li = lisInOl[i];
	li.style.backgroundColor = "green";
}
//12. Remove the div with a class of footer.
var footer = document.querySelector(".footer");
footer.remove();
