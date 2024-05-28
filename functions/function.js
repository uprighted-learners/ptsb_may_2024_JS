/* 
    ? Functions
        - Reusable block/s of code that perform a particular task
        - Can 'return' data to kick back outside of the function
        - Simplified programs that run a task when invoked/called 

*/


/*
    ? Function Declaration
        (1)       (2)
        function hi(){
            console.log("hi")
        }

        1: Keyword to denote a function
        2: Custom name for the function
            - () are for parameters

*/

function hi(){
    console.log("hi")
}

hi();

/* 
    ? Function Expression
    (1)
    let hey = function hi() {
        console.log("hi")
    }

    1: The variable "hey" is now a representation of the function "hi"

    * DOES not get hoisted
*/

let hey = function hi() {
    console.log("hi")
}
hey();

function greetings(){
    console.log("Hello")
}

greetings();


//? Create a function that, when invoked lists out the numbers 1-10. Name our function 'counting'

function counting () {
    // let count = 1
    // while(count <= 10) {
    //     console.log(count);
    //     count++
    // }
    for(let i = 1; i<= 10; i++){
        console.log(i);
    }
}

counting();

let arr = ["This", "is", "really", "cool", true, 1,false];

function arrList (){
    for(arrItem of arr){
        console.log(arrItem);
    }
}
arrList();

let num1 = 5;
let num2 = 4;

function addTwoNumbers(){
    let sum = num1 + num2
    console.log(sum);
}

addTwoNumbers();

/*
    ? Return keyword
        - Allows the function to stop its execution and output a value
        - Useful for handling logic/computation/calc and providing a single result back

*/

let iHaveCoffee = true;

function returnToMeTheResultOfHavingCoffee() {
    if(iHaveCoffee){
        return "I've had my coffee, ready to start my day!"
    } else { 
        return "Sorry, no coffee available zzz"
    }
}

// console.log(returnToMeTheResultOfHavingCoffee()); // === "I've had my coffee, ready to start my day!"

// console.log(returnToMeTheResultOfHavingCoffee() === "I've had my coffee, ready to start my day!") //? true

console.log(returnToMeTheResultOfHavingCoffee());


let resultOfHavingCoffee = returnToMeTheResultOfHavingCoffee()

