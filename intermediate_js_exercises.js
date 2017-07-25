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


