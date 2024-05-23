/* 
    ? Loops

    ? FOR
        Takes 3 parameters
         - initial expression
         - condition
         - increment expression
        
        Structure:
            for (initial exp; condition; increment exp) {
                ...code block
            }

*/


let i = 5;

//? Always use a declarative keyword when creating initial exp in a for loop (ex. let)
for (let i = 0; i<= 10; i++){
    if(i === 5) {
        break; // break will allow us to exit the for loop
    } else {
        console.log(i);
    }
}

// console.log(i);

// Increase i by 2
for (let i = 0; i <= 20; i+=2){
    console.log(i);
}

// Challenge: using a for loop, count from 10 to 0, going down by 1

for(let n = 10; n >= 0; n-=1){
    console.log(n);
}

for(let n = 10; n >= 0; n-=1) console.log(n);

let firstName = "Amit";

for(let i = 0; i < firstName.length; i++){
    console.log(firstName[i] , i);
}

// Add a collected sum of numbers
let sum = 0;

for (let i = 1; i <= 50; i++){
    sum += i;
    // console.log(sum, i);
}

console.log(sum);

for(let i = 1; i <=20; i++){
    if(i % 2 === 0) console.log(i);
}

let folders = ["Documents", "Desktop", "Pictures", "Downloads"];


for(let arrayIndex = 0; arrayIndex < folders.length; arrayIndex++){
    // console.log(folders[arrayIndex]);
}

//? For Of 
//  - They are great for working on arrays

for(let item of folders){
    console.log(item);
}

let catArray = [ "tabby", "british shorthair", "maine coon", "rag doll"];

for (let cat of catArray){
    if(cat === "maine coon") {
        console.log("Maine coons are very fluffy!");
    } else {
        console.log(`${cat} is not a maine coon`);
    }
}

//? For In
// - They work best on objects

let student = {
    name: "Peter",
    awesome: true,
    degree: "CS"
}
// console.log(student["name"]);

for (let key in student){
    // console.log(student[key])
    console.log(key + ":", student[key]);
}

