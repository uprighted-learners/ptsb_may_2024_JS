/* 
    ? Variables
    - containers to house data
    * declaration:
        * allowing memory space to be reserved by using an identifier
        * starts with let, var, const
        * cannot start with a number or character other than $ or _
        * if no value is assigned it is undefined
    * initialization:
        * assign a value to a variable
        * can be any valid val or data type
        * can be reassigned as well (except for const)
*/


let firstName; // Variable Declaration
let lastName = "Mangat"; // Initialization
// Reassignment
lastName = "Smith"

console.log(lastName);

let fName = "Amit";
let lName = "Mangat";

console.log(fName + " " + lName);

let fullName = fName + " " + lName

console.log(fullName);

let address= "123 main St, Salem, MA";

// Var is hoisted whereas let is not
//! Avoid using var

// console.log(example1);
// var example1 = 5

// Const is for constant variable assignments

// let ssn = "555-55-5555"
// ssn = "something else" //! TypeError: Assignment to constant variable.

/* 
    Coding Practice for Variables
     - be concise (ex: use firstName instead userFirstBornBlondeHairedChild)
     - be specific (ex: use item instead of i)
     - utilize camelCase (most popular in javascript)
     - snake_case
     - skewer-case
     - nocase
     - SCREAMING_CASE
*/

let firstName1 = "John";
let lastName1 = "Doe";
let houseNumber = "123";
let street = "Parker Rd";
let cityState = "Springfield, ma";
let postCode = "05401";
let city = cityState.slice(0,12)
let capitalizedState = cityState.slice(13).toUpperCase()
console.log(cityState.slice(13).toUpperCase());
let stamp = 
`My name and address is:\n${firstName1} ${lastName1}\n${houseNumber + " " + street}\n${city + " " + capitalizedState}`

console.log(stamp);