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


