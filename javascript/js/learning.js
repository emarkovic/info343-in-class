/*
Introduction to JavaScript the Language

Today we will focus on the JavaScript language itself, 
which can be used in many environments, not just the browser.
JavaScript syntax is very similar to Java, but it's a
very different language under the hood.
JavaScript is the marketing name: the real name of
the language is ECMAScript and the most current
ratified standard is known as ES2015, though
it's also called ES6 for "ECMAScript version 6"
*/

/*
This switches the interpreter in to strict mode,
which disables various language features that make
it really easy to introduce mistakes.
*/
"use strict";

///////////////////////////////////////////////////////////
// VARIABLES and BASIC TYPES
//JavaScript is loosely-typed; variables are untyped, can
//take on any type, and change type during their lifetimes
var x = 5;      //creates a variable named x, assigns numeric 5
x = "Hello";    //assigns string "Hello"
x = true;       //assigns boolean true
x = null;       //assigns null
x = undefined;  //assigns undefined (almost the same as null, but not quite)
x = 3.14;       //assigns numeric 3.14


//to view the value of something in the browser console,
//use console.log(); to group log messages, use console.group()
console.group("Variables and Basic Types");
console.log("value of x is:", x);
console.groupEnd();

console.group("PRACTICE: Variables and Basic Types");
//--PRACTICE--
//Create another variable named `y`, assign it the value
//currently held in the variable `x`, and write the value
//of `y` to the console log


//now assign `y` the numeric value 10
//what does x contain now? Write it to the console


console.groupEnd();

///////////////////////////////////////////////////////////
// STRINGS
//JavaScript strings have a `.length` property that reports
//the number of characters in the string (Unicode aware)
console.groupCollapsed("Strings");
var s = "Hello, World";
console.log(s, "is", s.length, "characters long");
s = "Hello, 世界";
console.log(s, "is", s.length, "characters long");

//strings can be concatenated using the + operator
s = s + ", YOU'RE FAB!";
console.log(s);

//strings have lots of built-in methods!
//to convert to lower-case, use .toLowerCase()
//this returns a new lower-cased version of the string 
console.log(s.toLowerCase());

//see http://www.w3schools.com/jsref/jsref_obj_string.asp
//for many other built-in methods on strings
console.groupEnd();

console.group("PRACTICE: Strings");
//--PRACTICE--
//create two new strings, `s2` and `s3`, initialize them
//with some text, and then create another string `s4`
//and assign it the concatenation of `s2` and `s3`
//then write it to the console so you can verify it worked.


//use the `.trim()` method to remove the leading and
//trailing white space from this string
var withSpaces = "    trim those spaces!     ";


console.groupEnd();

///////////////////////////////////////////////////////////
// OBJECTS (which are really just HashMaps)
//Objects store an unorderd set of key/value pairs. 
//Keys are typically strings, but values can be any type. 
//All operations are extremely efficient; getting a value
//for a key is practically constant time, regardless of
//the number of key/value pairs in the Object.

console.groupCollapsed("Objects");

//to create an object, we use a special syntax:
var course = {
    curriculum: "INFO",
    number: 343,
    name: "Client-Side Web Development",
    section: "D",
    quarter: 1,
    year: 2016,
    awesome: true
};

//you can log an entire object to see all key/value pairs
console.log("course object:", course);

//keys are also called "properties" becuase you can refer 
//to them as if they were properties (data members) of an object
console.log(course.name);
course.year = 2017;

//an alternative syntax lets you refer to keys using another
//variable, which comes in handy in some situations
var keyName = "number";
var valueForKey = course[keyName];  //could reduce to: course["number"]; 
console.log(valueForKey);           //could reduce to: console.log(course["number"]);

//accessing a property that doesn't exist yet will just
//return undefined, not an error!
var fooProp = course.foo;
console.log("value of '.foo' is", fooProp); 

//unlike Java objects, JavaScript objects are extensible;
//you can add new properties after the object is created.
//after all, it's really just a HashMap!
//note that a value can be another object
course.teacher = {
    firstName: "Dave",
    lastName: "Stearns"
};
console.log("after adding property:", course);

//you can remove properties using delete
delete course.teacher;
console.log("after deleting property:", course);

//you can test whether an object has a property using the
//.hasOwnProperty() method, which is on every object
var propInObject = course.hasOwnProperty("foo");
console.log("Is the 'foo' property in the object?", propInObject); 
console.log("Is the 'year' property in the object?", course.hasOwnProperty("year")); 

console.groupEnd();

console.group("PRACTICE: Objects");
//--PRACTICE--
//Create another object for one of your other courses
//assigning it to a new variable named `course2`
//use console.log() to view it in the browser console

//now try adding a property named `web site` (with a space)
//setting it to some string value...it's tricky...




console.groupEnd();

///////////////////////////////////////////////////////////
// ARRAYS
//Arrays store an ordered list of elements.
//Elements can be of any type, including objects and arrays.

console.groupCollapsed("Arrays")

//To create an array, we use a special syntax:
var quarters = ["Autumn", "Winter", "Spring", "Summer"];
console.log("quarters array:", quarters);

//every array has a `.length` property, which tells you
//how many elements are in the array
//the %d in the log message is a replacement token, 
//which will be replaced with the result of the expression
//`quarters.length`.
//%d expects a numeric value; use %s for a string value
console.log("there are %d quarters", quarters.length);

//you can add an element to the end of the array using
//the `.push()` method, which is on all arrays 
quarters.push("Summer in a Parallel Dimension");
console.log("quarters array:", quarters);

//you can address a particular element by index using
//this syntax, which is common for arrays
var firstQuarter = quarters[0]
console.log("%s is the first quarter", firstQuarter);

console.groupEnd();

console.group("PRACTICE: Arrays");
//--PRACTICE--
//create another array of playing card suits
//(clubs, diamonds, hearts, spades)


//then add a new element named "jokers"
//afer adding it, access it in the array
//and log it to the console



console.groupEnd();

///////////////////////////////////////////////////////////
// CONDITIONALS, TRUTHINESS and FALSINESS

console.groupCollapsed("Conditionals, Truthiness, and Falsiness");

//Like Java you can execute code only when an expression
//evaluates to true or false, but JavaScript will auto-coerce
//any type to a boolean if it needs to. These are the rules:
// - undefined, null, 0, and *empty string* coerce to false
// - everything else coerces to true

//these rules let us do clever things
//given that accessing an object property that doesn't yet
//exist will return undefined, and given that undefined 
//coerces to false, we can test whether a property is
//defined before trying to access it 
var school = {
    name: "Information School",
    motto: "The iSchool is My School!"
};

if (school.motto) {
    console.log(school.motto);
}
else {
    console.log("sorry no motto");
}

//we can also take advantage of short-circuiting boolean
//expressions to provide a default value
console.log("Number of students: " + (school.numStudents || "unknown"));
school.numStudents = 1000; 
console.log("Number of students: " + (school.numStudents || "unknown"));

//you can prohibit this auto-coercion by using the
//=== operator to test against something explicit
//it will return false if the two types are not the same
if (school.numStudents == "1000") {
    console.log("'1000' == 1000");
}

if (school.numStudents === "1000") {
    //this won't execute
    console.log("'1000' === 1000");
}

console.groupEnd();

///////////////////////////////////////////////////////////
// BASIC LOOPS
console.groupCollapsed("Basic Loops");
//JavaScript has the same basic looping constructs as Java
//so we can iterate over arrays using a standard `for` loop 
console.log("all quarters:");
var idx;
for (idx = 0; idx < quarters.length; idx++) {
    console.log(quarters[idx]);
}
//NOTE: JavaScript variables are not block-scoped, so
//if you declare `idx` within the for statement, it's actually
//declared in the current scope (in this case the global scope)
//it's not scoped to the for loop statement block
//as it would be in Java, C, or other block-scoped languages.  
//ES2015 supports a new keyword `let` that is block-scoped
//but you can't guarnatee that all clients' browsers will
//support that yet.

console.groupEnd();

///////////////////////////////////////////////////////////
// FUNCTIONS
console.groupCollapsed("Functions");
//You can define your own functions in JavaScript, though
//just like variables, the parameters are loosely-typed

//reverseString reverses the string passed as the first argument
function reverseString(s) {
    var reversed = "";
    var idx;
    for (idx = s.length-1; idx >= 0; idx--) {
        //short form of reversed = reversed + s.charAt(idx)
        reversed += s.charAt(idx);
    }
    return reversed;
} //reverseString()

console.log(reverseString("Help I'm reversed!"));

//but JavaScript functions are also values!
//the funciton name can be used anywhere you can use a value:
//variable assignment, function parameter, etc.
var fn = reverseString;
console.log(fn("I'm also reversed!"));

//or you can use an "anonymous" function wherever you can use a value
var logMe = function(v) {
    var now = new Date();
    console.log(now.toLocaleString() + ": " + v);
}
logMe("A test log message"); //note the date/time prefix that is added

//if an object property can hold any value, then it
//can also hold a function!
var reallyBadCipher = {
    transform: function(s, amount) {
        var transText = "";
        var idx;
        for (idx = 0; idx < s.length; idx++) {
            transText += String.fromCharCode(s.charCodeAt(idx) + amount);
        }
        return transText;
    },
    encode: function(s) {
        //the keyword `this` refers to the current object instance
        return this.transform(s, 1);
    },
    decode: function(s) {
        return this.transform(s, -1);
    }
};

var encrypted = reallyBadCipher.encode("This is a test message");
console.log(encrypted, "=", reallyBadCipher.decode(encrypted));

//and yes, even array elements can be functions!
console.groupEnd();

console.group("PRACTICE: Functions");

//--PRACTICE--
//Write a function that accepts two numeric arguments
//and returns the minimum of the two, or the first argument
//if they are equal to each other. Then call it a few times
//with various numbers to test it.


console.groupEnd();

///////////////////////////////////////////////////////////
// FUNCTIONAL PROGRAMMING
console.groupCollapsed("Functional Programming");
//So if functions are values, you can also pass them as
//parameters to another function. This enables to code in
//a different style. Instead of Object-Oriented Programming
//we can do Functional Programming.

//Take the for loop for example. It actually does two things:
//iterate over the array elements, and execute some code
//for each iteration. In functional programming, we separate
//those into two different functions: one that iterates,
//and one that is called for each iteration, passing the
//current element.
console.log("quarters using .forEach()")
quarters.forEach(logMe);

//we can also combine functions together
var logReversed = function(s) {
    logMe(reverseString(s)); 
}
console.log("quarters run through reverseString() and logMe()");
quarters.forEach(logReversed);

//if you want to generate a new array, transforming each
//element through a function, use .map()
//.map() doesn't alter the original array--it creates
//a new array, and populates it by running each element
//through the function you pass as the first parameter
var reversedQuarters = quarters.map(reverseString);
console.log(reversedQuarters); 

//the other core functional programming method is .reduce()
//this reduces an array of values to a single value.
//the function you pass is responsible for returning
//the new reduced value, given the next array element.
var myNumbers = [1,2,3,4,5,6,7,8,9,10];
function addReducer(sum, num) {
    return sum + num;
}
//.reduce() will call addReducer() once for each
//element in the array, passing the initial value
//and the current element as parameters
//in this case, the initial value is 0
var sum = myNumbers.reduce(addReducer, 0);
console.log("%s=%d", myNumbers.join("+"), sum);

console.groupEnd();

console.group("PRACTICE: Functional Programming");
//--PRACTICE--
//use this function to create an array of random
//numbers between 1 and 100, and practice using
//.forEach() to iterate over it, .map() to transform
//it into another array while doubling each number, and
//.reduce() to find the minimum value in the array
//HINT: use the function you wrote above that returns
//the minimum of the two numbers passed to it

function generateRandomNumbers(howMany, minimum, maximum) {
    minimum = minimum || 1;     //default minimum to 1
    maximum = maximum || 100;   //default maximum to 100
    var idx;
    var randNums = [];
    for (idx = 0; idx < howMany; idx++) {
        randNums.push(Math.floor((Math.random() * (maximum - minimum)) + minimum));
    }
    return randNums;
}

//>>> your code goes here!


//now use the .sort() method on a generated array of random
//numbers to sort them. Note that by default, sort will 
//convert those numbers to strings and sort them alphabetically!
//you need to supply a comparator function that comapres them
//as numbers.
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort



console.groupEnd();
