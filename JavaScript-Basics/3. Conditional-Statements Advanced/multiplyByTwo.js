function multiplyByTwo(input) {

    let numbs = Number(input[0]);
    let sum = 0;

    while (true) {

        numbs = input.shift();

        if (numbs < 0) {

            console.log("Negative number!"); break;
        }

        sum = numbs * 2;
        console.log(`Result: ${sum.toFixed(2)}`);
    }

}
multiplyByTwo([12, 43.2144, 12.3, 543.23, -20]);