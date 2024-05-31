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

const process = require("process");

// process.stdin.once("data", (input) => {
//     console.log(input.toString())
// })

// process.stdin.once("data", function(input) {
//     console.log(input.toString())
// })

const myFunction = (question, callback) => {
  console.log(question);
  process.stdin.once("data", callback);
};

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

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What is your name?", (input) => {
//     // logic
//     // console.log("Your name is:", input)
//     rl.setPrompt(`Hello ${input}`);
//     rl.prompt()
//     // To close the prompt interface:
//     rl.close()
// })

function ask(questionText) {
  return new Promise((resolve, reject) => {
    if (questionText) {
      rl.question(questionText, (input) => resolve(input));
    } else {
      reject("Please provide a question!");
      rl.close();
    }
  });
}

async function start() {
  try {
    let response = await ask("What is your name?");
    console.log("The user's name is:", response);
    let response2 = await ask("What is your fav color?");
    console.log(response2);
    // let response3 = await ask(); //! Will cause our code to hit the catch block, because our promise is being rejected within the ask function
  } catch (err) {
    console.log("The error ya got was:",err);
  }
}

// start();


function gameAsk (questionText) {
    return new Promise((resolve) => {
        rl.question(questionText, (text) => resolve(text))
    })
}

let gameOn = true;

async function gameStart () {
    while(gameOn){   
        let response = await gameAsk("Give me a number!")
        console.log("your number was:",response)
        let convertedResponse = parseInt(response);

        if(!Number(convertedResponse)){
            console.log("Please provide valid input");
        }else {
            console.log("hey thanks for giving me an actual number");
            let secondResponse = await gameAsk("Why did you pick that number?")
            console.log("Hey, that's a great reason!", secondResponse)

            gameOn=false

            // break;
            // return;
            // process.exit()
        }

    }
}

gameStart()