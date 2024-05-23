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

console.log("The value of the lightSwitch variable is evaluated as:", Boolean(lightSwitch));

if(lightSwitch === "on") {
    console.log("The light is on!");
}

/* 
    ? Else If Statement 
    * Allows us to add additional condition(s) if the prior one has not been satisfied
*/

let temp = 70;

if(temp >= 80){
    console.log("it is very hot outside");
} else if (temp >= 70) {
    console.log("it is a nice day");
} 

/* 
    ? Else Statement
    * If all else fails, execute this code
*/

if(false) console.log("This will log if the expression is true")
else console.log("The expression above is false")


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

if(!lightSwitch){
    console.log("The lightswitch is on");
} 

lightSwitch = "off";

if (lightSwitch != "on"){
    console.log("The lightswitch is off");
} else {
    console.log("The lightswitch is on");
}

// ? AND OR example

let sensor = "inactive";
let alarm = true;

if (sensor === "active" || alarm){
    console.log("The alarm may be on");
} else if (sensor === "inactive" && alarm){
    console.log("Your sensor may be broken")
} else if (sensor === "inactive" && !alarm){
    console.log("The alarm is likely off");
}


// !important to consider 'fallthrough', the greater condition should come on top

let myName = "Amit";
let length = 5;

if(myName[0] === "A" && myName.length >= length){
    console.log(`Your name begins with the letter A, and it is greater than or equal to ${length} characters`);
} else if (myName[0] === "A"){
    console.log("Your name begins with the letter A");
}

/* 
    ! Challenge
    * create an age variable with a number between 0-82
    * check if the age is under 16, say they can't drive
    * if the age is between 16 & 18, say they can drive but not drink
    * if the age is between 18 & 21, they can vote but not drink
    * if the age is over 21, they can drink
    ! Spicey mode
    * how would you handle if a user inputs not a number? ex: "potato" as age
*/