function barcodeGenerator(input) {

    let start = input[0];
    let finish = input[1];
    let barcode = "";

    let firstStart = start.charAt(0);
    let secondStart = start.charAt(1);
    let thirdStart = start.charAt(2);
    let forthStart = start.charAt(3);

    let firstFinish = finish.charAt(0);
    let secondFinish = finish.charAt(1);
    let thirdFinish = finish.charAt(2);
    let forthFinish = finish.charAt(3);

    for (i = firstStart; i <= firstFinish; i++) {
        for (j = secondStart; j <= secondFinish; j++) {
            for (k = thirdStart; k <= thirdFinish; k++) {
                for (l = forthStart; l <= forthFinish; l++) {

                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        barcode += `${i}${j}${k}${l} `

                    }
                }
            }
        }
    }

    console.log(barcode);
}

barcodeGenerator(["2345", "6789"]);
barcodeGenerator(["3256", "6579"]);


/*                                АЛТЕРНАТИВНО РЕШЕНИЕ 1 : АЛЕКС - непълно

function barcodeGenerator(input) {
    let first = Number(input[0]);
    let last = Number(input[1]);
    let even = false;
 
    let log = '';
 
    while (first <= last) {
        let temp = first + "";
 
        if (!((Number(temp[0]) % 2 === 0) || (Number(temp[1]) % 2 === 0) || (Number(temp[2]) % 2 === 0) || (Number(temp[3]) % 2 === 0))) {
            log += " " + first;
        }
 
      
        first++;
    }
    console.log(log);
}
 
barcodeGenerator(["2345", "6789"])   



                                        АЛТЕРНАТИВНО РЕШЕНИЕ 2: ХРИСТО ПОПОВ - непълно

function barcodeGenerator(input) {
    let first = Number(input[0]);
    let last = Number(input[1]);
    let even = false;
 
    let log = '';
 
    while (first <= last) {
        let temp = first + "";
 
        if ((Number(temp[3]) % 2 === 0)) {
            first += 1;
        }
        if ((Number(temp[2]) % 2 === 0)) {
            first += 10;
        }
        if ((Number(temp[1]) % 2 === 0)) {
            first += 100;
        }
        if ((Number(temp[1]) % 2 === 0)) {
            first += 1000;
        }
 
        if (first > last) {
            break;
        }
        log += " " + first;
        first++;
    }
 
    console.log(log);
}
 
 
barcodeGenerator(["2345", "6789"])

*/