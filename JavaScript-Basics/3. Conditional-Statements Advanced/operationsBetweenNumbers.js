function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            if (result % 2 === 0) {
                console.log(`${num1} + ${num2} = ${result} - even`)
            } else {
                console.log(`${num1} + ${num2} = ${result} - odd`)
            } break;
        case "-":
            result = num1 - num2;
            if (result % 2 === 0) {
                console.log(`${num1} - ${num2} = ${result} - even`)
            } else {
                console.log(`${num1} - ${num2} = ${result} - odd`)
            } break;
        case "*":
            result = num1 * num2;
            if (result % 2 === 0) {
                console.log(`${num1} * ${num2} = ${result} - even`)
            } else {
                console.log(`${num1} * ${num2} = ${result} - odd`)
            } break;
        case "/":
            result = num1 / num2;
            if (num2 !== 0) {
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
            } else {
                console.log(`Cannot divide ${num1} by zero`);
            } break;
        case "%":
            result = num1 % num2;
            if (num2 !== 0) {
                console.log(`${num1} % ${num2} = ${result}`);
            } else {
                console.log(`Cannot divide ${num1} by zero`);
            } break;
    }
}

operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["7", "3", "*"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "0", "%"]);
