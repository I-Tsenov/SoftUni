function factorialDivision(num1, num2) {

    let firstFactorial = factorial(num1);
    let secondFactorial = factorial(num2);

    let result = firstFactorial / secondFactorial;

    function factorial(input) {

        let num = Number(input);
        let output = 1;

        for (let i = 1; i <= num; i++) {

            output = output * i;

        }

        return output;
    }

    return result.toFixed(2);

}


console.log(factorialDivision(5, 2));