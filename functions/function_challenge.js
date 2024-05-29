// CHALLENGE
/* 
    ! Pythagorean Theorem Challenge
    * Right angle triangle has three sides
    * The longest side c is calculated by taking the formula
    *    - a**2 + b**2 = c**2
    * Create a function that takes the two triangle sides
    * Returns the hypotenuse
    ? HINT: c = sqrt(a **2 + b ** 2)
*/

function pythagoreanTheorom(a,b) {
    let c = Math.sqrt(a ** 2 + b ** 2) 
    return c.toFixed(2);
}

const pythagoreanTheorom2 = (a,b) => Math.sqrt(a ** 2 + b ** 2).toFixed(2)


console.log(pythagoreanTheorom2(5,3))
