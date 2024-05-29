/* 
    ? Parameters and Arguments

                (1)
    function hi(name, name2){
        console.log(`Hi ${name} and ${name2}`)
                            (2)
    }

        (3)
    hi("Bruce","Amit")

    1: The parameter(s) that the function is accepting or holding
    2: Using string interpolation, we can refer to the parameter that was given to the function
    3: This is where we define what the parameter's value will be
        - Also known as an argument
*/

function order(ticket){
    console.log(`I exchanged my ticket for a ${ticket}`);
}

order("cheese pizza")
order("burger")
order("milk shake")

/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function greetFirstLast (fName,lName) {
    let firstLast = fName + " " + lName;
    console.log(`Hi, my name is ${firstLast}`)
    // With return
    // return `Hi, my name is ${firstLast}`
}

greetFirstLast("Bugs", "Bunny");
greetFirstLast("Slim", "Shady");

// Have to place the function call in a console.log in order to see what it is returning
// console.log(greetFirstLast("Amit", "Mangat"));

let x = 1;

function one() {
    x = 2;
}

one();

console.log(x); // 2

function calc(x,y,operator){
    switch(operator){
        case "*":
            console.log("Multiply", x, y);
            return x * y
        case "-":
            console.log("Subtract", x, y);
            return x - y
        case "+":
            console.log("Add", x, y);
            return x + y
        case "/":
            console.log("Divide", x, y);
            return x / y
        default: 
            console.log("Invalid input");
    }
}

// console.log(calc(2,2,"*"));
console.log(calc(1, 3, "+"));
console.log(calc(10,5, "/"));


let thisSum = calc(2,2,"+")

console.log(thisSum);


console.log(typeof console)

let mockConsoleObject = {
    log: function (text) {
        process.stdout.write(text + "\n")
    },
    add: function (num1, num2){
        return num1 + num2
    },
    capitalize: function (str) {
        return str[0].toUpperCase() + str.slice(1) 
    } 
}

mockConsoleObject.log("some type of data to display?")
console.log(mockConsoleObject.add(2,2))
console.log(mockConsoleObject.capitalize("daffy"))