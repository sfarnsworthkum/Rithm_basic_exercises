//forEach, map, and filter exercises
//Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.
function printFirstAndLast(arr) {
  arr.forEach(str => console.log(str[0] + str[str.length - 1]));
}
//Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value have been added to each object in the array.
function addKeyAndValue(arr, key, value) {
  arr.forEach(obj => obj[key] = value);
  return arr;
}
//Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
function valTimesIndex(arr) {
  return arr.map((el, i) => el * i);
}
//Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:
function extractKey(objs, key) {
  return objs.map(el => el[key]);
}
//Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive
function filterLetters(arr, l) {
  return arr.filter(el => el.toLowerCase() === l).length;
}
//got fancy with => refactors
var filterLetters = (arr, l) => arr.filter(el => el.toLowerCase() === l).length;

//Write a function called filterKey which accepts two parameters, an array of objects, and the name of a key and returns an array with only those objects which have truthy values for that key:
function filterKey(arr, key) {
  return arr.filter(obj => obj[key]);
}
//reduce
//Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:
function extractKey(arr, key) {
  return arr.reduce(function (acc, el) {
    acc.push(el[key]);
    return acc;
  }, []);
}
//Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

function filterLetters(arr, l) {
  return arr.reduce(function(count, el) {
    if (el.toLowerCase() === l) {
      count++;
    }
    return count;
  }, 0);
}



//Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value has been added. You can do this a few ways, either by reducing starting with an empty array and making copies of the object or by starting with the actual array!
function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, next, i) {
    acc[i][key] = value;
    return acc;
  }, arr)
}



// reminder to myself what's going on with reduce
function reduce(arr, fn, initialValue) {
  var acc = initialValue;
  for (var i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i])
  }
  return acc;
}
//Iterators Exercises
//Part I
//Use the following object for this set of questions:
var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
]
//Write a function called printEmails which console.log's each email for the users.
function printEmails(users) {
  users.forEach(function (users){
    console.log(users.email);
  });
}
//Write a function called printHobbies which console.log's each hobby for each user.
//Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in
function printHometownByState(users, state) {
  return users.find(function(user) {
    return user.hometown.state === state;
  });
}
//Write a function called allLanguages which returns an array of all of the unique values
function allLanguages(users) {
  var languages = {};
  users.forEach(function(user){
    user.favoriteLanguages.forEach(function(language){
      languages[language] = true;
    });
  });
  return Object.keys(languages);
}
//Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in
function hasFavoriteEditor(users, editor) {
  return users.some(function(user) {
    return user.favoriteEditor.toLowerCase() === editor.toLowerCase();
  });
}
//Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
function findByUsername(users, name) {
  return users.find(function(user) {
    return user.username === name;
  });
}
//Part II
//Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
function vowelCount(str) {
  var lowArr = str.toLowerCase().split('');
  var vowels = "aeiou";
  var obj = {};
  lowArr.forEach(function(letter){
    var isVowel = vowels.indexOf(letter) != -1;
    if (isVowel){
      if(obj[letter]){
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}
//Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).
function removeVowels(str) {
  var lowArr = str.toLowerCase().split('');
  var vowels = "aeiou";
  return lowArr.filter(function(letter) {
    return vowels.indexOf(letter) === -1;
  });
}
