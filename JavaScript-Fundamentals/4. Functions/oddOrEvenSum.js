function oddOrEvenSum(num) {

    let oddSum = 0;
    let evenSum = 0;

    let toArray = String(num).split("")


    for (let i = 0; i < toArray.length; i++) {
        const element = Number (toArray[i]);

        if (element % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
        
    }

let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

return result;

}

console.log(oddOrEvenSum(1000435));