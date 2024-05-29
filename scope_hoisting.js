/* 
    ? Scope & Hoisting

    * Used to determine how information in different code blocks can be accessed

    ? Five scope types:
    * Global Scope/Window
    * Block 
    * Function
    * Module
    


    ? Global Scope
    * Outermost scope
    * Window object when in the client/browser
    * JS file when in node
    * Accessible from every other scope
*/

let globalScopeVariable = "This is globally scoped";

// Block scope
{
  {
    {
      {
        console.log(globalScopeVariable);
        let innerMostScope = "This is from the inner scope";
      }
    }
  }
}

// console.log(innerMostScope); //! Reference error, innerMostScope is not defined

// Inside can look out, outside can't look in

/* 
    ? Function Scope
    * Accessible only inside of a function
*/

function scope() {
  let fxScopeVariable = "This is a function scope variable";
  console.log(fxScopeVariable);
  console.log(globalScopeVariable);
}

scope();
// console.log(fxScopeVariable); //! Error

/*
    ? Lexical Scope
    * Variables are accessible by their nested position
    * Inner fx scope can access outer fx scope
*/

function outerFx() {
  // Outer fx scope
  let ofxv = "Outer fx scoped variable";

  function innerFx() {
    let ifxv = "Inner fx scoped variable";
    console.log(ofxv);
  }

  innerFx();
}

outerFx();

/* 
    ? Hoisting
    * JS parsing engine reads top to bottom, left to right
    * JS interpreter runs the code twice
        * First, it looks for VARiables and fx declarations and hoists them
        * It allocates the memory space for those declarations
        * It then executes the code line-by-line  
*/

let myName = "Amit";

console.log(myName);

{
  var age = 28; // Var allows the data to be available on the outside
}

console.log(age);

// ? Traditional Function declarations are hoisted
hoistedFunc(); // Still runs because it is hoisted

function hoistedFunc() {
  console.log("I am hoisted");
}

// notHoisted()

const notHoisted = () => {
  console.log("I am not hoisted");
};

function run() {
  var foo = "foo";
  let bar = "bar";
  console.log(foo, bar);

  {
    var moo = "moo";
    let baz = "baz";
    console.log(moo, baz);
  }
  console.log(baz); // ! Reference error
  console.log(moo); // Works because variable declared with 'var' can trickle into the outer scope
}

run();

{
  {
    var something = "something"
  }
}

console.log(something);

// ! THIS IS BAD, DON'T USE HOISTING TO YOUR BENEFIT