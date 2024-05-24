/* 
    ? While loops

        - Structure

        while(expression){
            ... code block
        }

     - The main purpose for while loops are when iteration is uncertain
     ex: If we wanted to guess a spade from multiple decks of cards, we don't know when to stop looping. We can use a while loop to get us exactly what we need and then exit

*/

let numArr = [1, 5, 35, -23, 0, 3, 10, 4, 4.26];
let sum = 0;
let index = 0;

while (index < numArr.length){
    console.log(numArr[index])

    numArr[index] > 0 && (sum += numArr[index])

    // if(numArr[index] > 0 ) sum+= numArr[index]
    index++;
}   

console.log("The sum of all positive integers is:", sum);

let city = [
    "building",
    "sign",
    "window",
    "bridge",
    "lighthouse",
    "light pole",
    "tree",
    "empty street"
]

let pos = 0;
let structure = city[0];

while(structure != "empty street"){
    console.log(`Spider-main swings from the ${structure}`)
    pos++;
    structure = city[pos];
}

console.log(`Spider-main lands in the ${structure}`);


/*
    do {

    } while (expression)
        - work just like while loops with the exception that it will run our code block at least once

*/

let spidyHP = 20;

let badguys = [
    {
        baddie:"Green Goblin",
        hp: 15
    },
    {
        baddie:"Venom",
        hp: 25
    },
    {
        baddie:"Stilt-main",
        hp: 5
    },
    {
        baddie: "Thug",
        hp: 0
    }
]
// Math.random() gives you a number between 0-1. Math.random() * num - will give u a number within that range
let rand = Math.floor(Math.random() * badguys.length);

console.log(badguys[rand]);

let villian = badguys[rand];

console.log(`${villian.baddie} has appeared`);

do {
    if(villian.baddie == "Thug"){
        console.log("Spider-man webs the thug EZPZ.");
        break;
    }   

    console.log(`${villian.baddie} hits Spider-man`);
    spidyHP--;
    console.log("Spider-Man HP:", spidyHP);

    let spidyHit = Math.floor(Math.random() * 3);
    console.log(`Spider-Man hits ${villian.baddie} for ${spidyHit} damage`);
    villian.hp -= spidyHit;

    console.log("Villian HP:", villian.hp );

    if (spidyHP === 0){
        break;
    }

} while (villian.hp > 0)


villian.hp <= 0 ? console.log(`Spider-man captures ${villian.baddie}`) : console.log(`${villian.baddie} has taken down spiderman`);
