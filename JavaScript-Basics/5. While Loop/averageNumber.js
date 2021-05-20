function averageNumber(input) {

    let index = 0;
    let sum = 0;
    let numberCount = Number(input[index])
    index++

    while (index < input.length) {
        let currentNumber = Number(input[index]);
        sum += currentNumber;
        index++
    }

    let average = sum / (input.length - 1);
    console.log(average.toFixed(2));

}

averageNumber(["2", "4", "6"])


/*
                                    АЛТЕРНАТИВНО РЕШЕНИЕ С FOR LOOP :

function averageNumber(input) {

    let sum = 0;

    for (let i = 1; i < input.length; i++) {
        let currentNumber = Number (input[i]);
        sum += currentNumber;
    }

    let average = sum / (input.length - 1);
    console.log(average.toFixed(2));
}

*/
