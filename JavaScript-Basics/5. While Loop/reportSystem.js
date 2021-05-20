function reportSystem(input) {
    let expectedSum = Number(input[0]);
    let total = 0;
    let card = 0;
    let cash = 0;
    let cashIncome = 0;
    let cardIncome = 0;
    let i = 1;
    let command = input[i];

    while (command !== "End") {
        let pricePerGood = Number(command)

        if (i % 2 === 0) {

            if (pricePerGood < 10) {
                console.log("Error in transaction!");
            } else {
                card++
                total += pricePerGood;
                cardIncome += pricePerGood;
                console.log("Product sold!");
            }
        }
        else {

            if (pricePerGood > 100) {
                console.log("Error in transaction!");
            } else {
                cash++
                total += pricePerGood;
                cashIncome += pricePerGood;
                console.log("Product sold!");
            }
        }

        if (total >= expectedSum) {

            let averageCS = cashIncome / cash;
            let averageCC = cardIncome / card;

            console.log(`Average CS: ${averageCS.toFixed(2)}`);
            console.log(`Average CC: ${averageCC.toFixed(2)}`);
            break;
        }

        
        i++;
        command = input[i];

    }

    if (command === "End") {
        console.log("Failed to collect required money for charity.");
    }
}

reportSystem(["500", "120", "8", "63", "256", "78", "317"])