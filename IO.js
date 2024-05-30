/* 

    ? IO & Callbacks
    * Process
        * An event that runs in the background or foreground of your machine
    * Node.js allows access to its processes via the process object
    * This allows us to process external input and internal output (IO)
    * We do this by using process.stdin and process.stdout
*/


// console.log(`This is the output from the node process with the process id: ${process.pid}`)

// console.log(process);

/* 
    ? Callback Function
    * Fx that is passed to another as an argument
    * A fx that runs when something occurs
    * - Anonymous Functions
         * Typically used in callbacks
         * Short lived
         * Non usable
*/

// function then(callback) {
//     // some crazy logic here...
//     let aName = "Timmy";
//     callback(aName);
// }

// then((someData) => {
//     console.log(someData)
// }
// )

// .then((p)=> {console.log(p)})


console.log("Please enter some input");

const process = require("process")

// process.stdin.once("data", (input) => {
//     console.log(input.toString())
// })

// process.stdin.once("data", function(input) {
//     console.log(input.toString())
// })

const myFunction = (question, callback) => {
    console.log(question);
    process.stdin.once("data",callback )
}


// myFunction("What is your favorite color?",(input) => {
//     console.log("Great response! your fav color is:");
//     console.log(input.toString())
// } )

// myFunction("What is your favorite movie?", (input) => {
//     if(input.toString().length <=2){
//         console.log("uhhh give me back some input...");
//     } else {
//         console.log("That is a great movie! nice choice!");
//         console.log(input.toString());
//     }
// })


// function handleInput (input) {
//     console.log("Reference function")
//     console.log(input.toString())
// }

// process.stdin.once("data", handleInput )




