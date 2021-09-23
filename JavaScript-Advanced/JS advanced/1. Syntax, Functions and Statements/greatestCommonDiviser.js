function greatestCommonDiviser(num1, num2) {

    //  Euclidian algorithm for GCD

    if (num2 === 0) {
        return num1
    }   
    return greatestCommonDiviser(num2, num1 % num2)
    
}

console.log (greatestCommonDiviser(25, 15))




// if (num1 % 10 === 0 && num2 % 10 === 0) {
//     console.log(10)
// } else if (num1 % 7 === 0 && num2 % 7 === 0) {
//     console.log(7)
// } else if (num1 % 5 === 0 && num2 % 5 === 0) {
//     console.log(5)
// } else if (num1 % 3 === 0 && num2 % 3 === 0) {
//     console.log(3)
// } else if (num1 % 2 === 0 && num2 % 2 === 0) {
//     console.log(2)
// }
