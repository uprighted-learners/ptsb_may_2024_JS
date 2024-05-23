/* 
    ? Conditionals and Logic Gates
    - Conditional statements check if an expression is truthy
    - The expression must always resolve to true
    - If it's truthy, a code within the statement executes
    - If it is falsey, nothing happens unless we specify otherwise


    ? Expressions vs Statements
        * Expression
            * Unprocessed value grouped by ()
            * Evaluated to be truthy
            * Can be empty
        * Statements
            * Keyword
            * Expression
            * Block

    Statements evaluate and execute code block when invoked
        ! Conditional is an example of a statement
*/

/* 
    ? If Statement
    * Checks if something is true and executes the code
*/

if (true) console.log("this will always log");

let lightSwitch = "on";

console.log(
  "The value of the lightSwitch variable is evaluated as:",
  Boolean(lightSwitch)
);

if (lightSwitch === "on") {
  console.log("The light is on!");
}

/* 
    ? Else If Statement 
    * Allows us to add additional condition(s) if the prior one has not been satisfied
*/

let temp = 70;

if (temp >= 80) {
  console.log("it is very hot outside");
} else if (temp >= 70) {
  console.log("it is a nice day");
}

/* 
    ? Else Statement
    * If all else fails, execute this code
*/

if (false) console.log("This will log if the expression is true");
else console.log("The expression above is false");

/* 
    if(conditionIsTrue){
        ...execute this block of code
    } else if (thisConditionisTrue){
        ...execute this block of code
    } else {
        ...if everything above fails, execute this block of code
    } 
*/

// ? NOT example (!)

lightSwitch = 0;

if (!lightSwitch) {
  console.log("The lightswitch is on");
}

lightSwitch = "off";

if (lightSwitch != "on") {
  console.log("The lightswitch is off");
} else {
  console.log("The lightswitch is on");
}

// ? AND OR example

let sensor = "inactive";
let alarm = true;

if (sensor === "active" || alarm) {
  console.log("The alarm may be on");
} else if (sensor === "inactive" && alarm) {
  console.log("Your sensor may be broken");
} else if (sensor === "inactive" && !alarm) {
  console.log("The alarm is likely off");
}

// !important to consider 'fallthrough', the greater condition should come on top

let myName = "Amit";
let length = 5;

if (myName[0] === "A" && myName.length >= length) {
  console.log(
    `Your name begins with the letter A, and it is greater than or equal to ${length} characters`
  );
} else if (myName[0] === "A") {
  console.log("Your name begins with the letter A");
}

/* 
    ! Challenge
    * create an age variable with a number between 0-82
    * check if the age is under 16, say they can't drive
    * if the age is between 16 & 18, say they can drive but not drink
    * if the age is between 18 & 21, they can vote but not drink
    * if the age is or over 21, they can drink
    ! Spicey mode
    * how would you handle if a user inputs not a number? ex: "potato" as age
*/

let age = "potato";

if (age < 16) {
  console.log("sorry u cant drive");
} else if (age < 18) {
  console.log("you can drive, but not drink");
} else if (age < 21) {
  console.log("you can vote but not drink");
} else if (age >= 21) {
  console.log("you can drink!");
} else {
  console.log("Invalid input!");
}

if (age < 16) {
  console.log("cannot drive");
}

if (age < 18) {
  console.log("user can drive but not drink");
}

if (age < 21) {
  console.log("user can vote but not drink");
}

if (age >= 21) {
  console.log("partayyy");
} else {
  console.log("invalid input yo. do you know how to count?!");
}

/* 
    !Important thought
    * If you want your condition to display any possible match, create separate if statements
    * If you want your condition to display exactly one match, chain your conditional statements
*/


/* 
    ? Ternaries 
    - Expressions
    condition ? expr if true : expr if false
*/

let ignition = false;

ignition === true ? console.log("Ignition is on") : console.log("ignition is off");
ignition === true ? console.log("Ignition is on") : null;


age < 16 
? console.log("Can't drive")
: age <18 
? console.log("you can drive") 
: age <21 
? console.log("you can vote")
: age >=21 
? console.log("can drink")
: console.log("invalid input");

let time = "9:00 PM";
let meal;

if(time.slice(6) === "PM"){
  meal = "dinner"
} else {
  meal = "brunch"
}


// let meal = time.slice(6) === "PM" ? "dinner" : "brunch"




/*
    ? Switch statements
    * Execute a block of code dependent upon a different case
    * We ask a question requiring specific response determined by our answer
*/


let x = 10;

switch (true){
    case x >= 10: 
        console.log("x is greater than or equal to 10");
        break;
    case x > 5: 
        console.log("x is greater than 5");
        break;
    default:
        console.log("invalid input");
    
}

let uprightInstructor = "Amit";

switch (uprightInstructor) {
    case "Paul":
        console.log(`${uprightInstructor} is our Program Staff Manager`);
        break;
    case "Amit":
        console.log(`${uprightInstructor} is our lead instructor`);
        break;
    case "Ben":
        console.log(`${uprightInstructor} is our teaching assistant`);
        break;
    default: 
        console.log("sorry name not recognized");
}