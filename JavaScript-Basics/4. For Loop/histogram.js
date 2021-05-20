function histogram(input) {
    let numberCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= numberCount; i++) {
        currentNumber = input[i];

        if (currentNumber < 200) {
            p1 += 1;
        } else if (currentNumber <= 399) {
            p2 += 1;
        } else if (currentNumber <= 599) {
            p3 += 1;
        } else if (currentNumber <= 799) {
            p4 += 1;
        } else {
            p5 += 1;
        }

    }

    p1 = p1 / numberCount * 100;
    p2 = p2 / numberCount * 100;
    p3 = p3 / numberCount * 100;
    p4 = p4 / numberCount * 100;
    p5 = p5 / numberCount * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"])