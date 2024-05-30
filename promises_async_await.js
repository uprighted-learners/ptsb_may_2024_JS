/* 
    ? Promises
    * An object that may produce a singular value in the future

    ? Three States
    * Pending (unfinished)
    * Fulfilled (completed value result)
    * Reject (error)

    * Promises allow other code to execute without having to wait for their own completion
*/


function standard(){
    console.log("standard");
}

standard()

function getData(){
    let x = "potato";
    setTimeout(function () {
        x = "Magical Data"
    }, 6000)
    return x
    // setTimeout(()=>{}) 
   
}

console.log(getData())

const func = () => {} // anonymous arrow func is found on right right hand side
const func1 = function () {} // anonymous traditional func is found on right right hand side


function promiseFx() {
    return new Promise(function (resolve) {
        // Simulating network request with settimeout
        setTimeout(function () {
            resolve("After 3 seconds, it resolves")
        }, 3000)
    })
}

console.log(promiseFx());

// .then() syntax
promiseFx()
// resolver that executes a function when a promise has been fulfilled
  .then((msg) => console.log(msg))


/* 
    ? Asynchronous Functions
    * Introduced in ES7
    * Alternate way to write promises
    * A function that returns a promise object
    * Allows us to resolve or reject a promise
*/

async function asyncFx () {
    return "Hello leaners!"
}

console.log(asyncFx()); 

// ? How do we get values out of async then?

// ... Use a resolver

// .then() syntax

// asyncFx().then((data) => console.log("Data from promise:",data))

// await keyword

/* 
    ? Await
    Can be utilized only inside of an async function
    Tells JS we must wait on a promise returning fx before moving on
*/

async function awaitFunction () {

    const data = await asyncFx();
    console.log("Data inside async func, received from promise:",data);

}

awaitFunction()


console.log("hello world");


let networkStatus = true;


function promiseEx (networkConnection) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(networkConnection){
                resolve("This is the data! Woot Woot 😀!!")
            }else {
                reject("😔 Please check your network connection")
            }
        },3000)
    })
}

async function handlePromiseAsync(networkS){
    try {
        console.log(await promiseEx(networkS));
        console.log("Data received");
    } catch (err){
        console.log("Handled error in the catch block!" , err);
    }
}

// promiseEx(networkStatus)
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

handlePromiseAsync(networkStatus)


const expensiveFunction = async () => {
    for (let i = 0; i<= 1_000_000_000; i++){
        if(i == 1_000_000_000) {
            return i;
        }
    }
}

const getLog = async () => {
        console.log("Start");
        let result = await  expensiveFunction();
        console.log("Loops are done");
}


getLog();


console.log("Continue doing other tasks.... while we wait for the loop");