/* 
    ? Javascript
    * founded in 1996 Brandan Eich
    * high level language
    * client-sided language ( generally works in the browser )
    * interpreted language ( not compiled )
    * multi-paradigm - object oriented, functional, imperative
    * prototype (usually accessed via '.' ex. .slice())
    * weakly typed 
    * ECMAScript -- organization setting the language specifications

*/

/* 
    ? Comments
    * blocks of code that are not being interpreted 
    * as devs, it documents our code and makes it more maintainable
    * denoted by // for single line (cmd/ctrl + /)
    * denoted by /* for multiline  (opt/alt + shift + a)
*/

2 + 2;

console.log(2 + 2); // Shows us the output in the console window

/* 

JS Common Data types:
    Primitives:
        - string
        - number
        - boolean
        - null
        - undefined
        - Not a number (NaN)
    Reference:
        - array
        - object
        - Set
        - Map
*/

/* 
    ? Strings
        * primitive data type to represent characters
        * enclosed in "", '', ``
*/

console.log("This is some text");
console.log("This is some other text");
console.log(`This is another piece of text`);
console.log("2023");
console.log("Hi my name is Amit," + " " + "and I like ice cream.");
// All strings have indexes
console.log("Dog"[0]);

/* 

    String Interpolation ( ` ` )
    * A process of including space for an expression in a string
        Syntax: 
            `string ${expression} string`

*/

let myName = "Amit";
console.log(`Hi, my name is ${myName}, and I am ${30 + 2} years old.`);

/* 
    ? String methods
     - .length
     - .slice()
     - .toUpperCase()
     - .toLowerCase()
*/

console.log("dsfkjhgkjdlhfghgkjhdfkjghkudfh".length);
console.log("amit".toUpperCase());
console.log("AMIT".toLowerCase());

console.log("Amit Mangat \n123 Main st \n555-555-5555");

// Checking data:

console.log(typeof 342827364);
console.log(typeof "Something");

/* 

    ? Numbers
    * any integer, or decimal
*/

console.log(25);
console.log(3.14);

// Floating point arithmetic not always accurate
console.log(0.2 + 0.1);
console.log((0.2 * 10 + 0.1 * 10) / 10);


/* 
    ? Booleans
        * Binary value
        * either true or false
        * Examples of 'falsy' values
            - 0
            - undefined
            - null
            - NaN 
            - ""
*/

console.log(true);
console.log(false);

// Boolean interface () returns whether a value is truthy or falsy

console.log("Truthy Value:",Boolean(1));
console.log("Falsy Value:", Boolean(0));

/* 

    ? Type coercion 
        * JS is a weakly typed programming language
        * doesn't require data type definition
        * comparison operator (==) performs type coercion before resolving the expression
            - will check the values but NOT the data type
        * we can use (===) strict equality to avoid type coercion
            - will check values AND data type

*/


console.log(2 == 2); //true
console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log(typeof 2, typeof "2");


/* 

    ? Not a Number (NaN)
    * triggered when performing operations with numbers and non-numbers
    * used when performing mathematical computations that don't make sense
    
*/

console.log(undefined + 5);
console.log(Math.sqrt(-1));

/* 
    ? Operators 
        * addition (+)
        * subtraction (-)
        * multiplication (*)
        * divide (/)
        * exponent (**)
        * dot (.)
        * modulo/modulus (%)
        * assignment (=)
        * loose comparison (==)
        * strict comparison (===)
        * is NOT equal !==
*/

// Modulo 
console.log(10/2);
console.log(10 % 2 == 0);
console.log(10 % 3);


// Assignment
let myFavColor = "blue"
console.log(myFavColor);
console.log(myFavColor == "blue");

// Flip booleans
console.log(!true) // prints false - flipping the boolean

let myAge = 32;

console.log("My Age:",myAge);

if(myAge) {
    console.log("Age was provided");
} else {
    console.log("Age was not provided");
}

/* 
    ? Arrays
*/ 
let emptyArr = new Array(50).fill("item")
console.log(emptyArr);


let otherArr = ["item","item"]
console.log(otherArr)

console.log(Array.isArray(otherArr));


/* 
    ? Objects
*/

let userProfile = new Object();

userProfile.name = "Amit";
userProfile.myFavColor = "blue";
userProfile.darkMode = true;

console.log(userProfile);

let character = {
    name: "Sonic The Hedgehog",
    rings: 49,
    emeralds: 5,
    lives: 3
}


console.log(character);