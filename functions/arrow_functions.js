/* 
    ? Arrow Functions

    let hi = () => {
        console.log("hi")
    }

    1: To reuse arrow function store them in a variable
    2: We use "big arrow" to denote that it is a function

    - Arrow functions are a bit newer, and basically just a more concise way to write functional expressions
      ! Do not get hoisted

*/

// Concise Body

let hi = () => console.log("hi");

// Block Body

let hi1 = () => {
  let greeting = "Hello";
  let moreInfo = "Steve";
  console.log(`${greeting} ${moreInfo}`);
};

// hi()
hi1();

// Implicit Return

let apples1 = (x) => `There are ${x} apples`;

console.log(apples1(5));

// Explicit Return

let apples2 = (x) => {
  // ...
  return `There are ${x} apples`;
};

console.log(apples2(10));


/*
    Make a tip calculator using an arrow function, that receives 2 params - (subtotal, tip)
    Have it RETURN a value
    Capture that returned value in a VARIABLE
    Print that variable (console log)
*/

let tipCalc1 = (subtotal, tip) => {
    return subtotal +  tip
}

let total1 = tipCalc1(10,2);

let tipCalc2 = (subtotal, tip) => subtotal + tip;

let total2 = tipCalc2(10,4)

// console.log(total1);
console.log(total2);


let subtotal = 15;
let salesTax = .07;

let totalWithTax = (sbT,sT) => {
    return ((sbT * sT) + sbT).toFixed(2) 
}

// let totalWithTaxImplicit = (sbT, sT) => ((sbT * sT) + sbT).toFixed(2) 

console.log(totalWithTax(subtotal, salesTax));
// console.log(totalWithTaxImplicit(subtotal, salesTax));



