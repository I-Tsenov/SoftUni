function addBags(input) {

    let luggagePrice20 = Number(input[0]);
    let luggageWeight = Number(input[1]);
    let daysRemaining = Number(input[2]);
    let luggageQuantity = Number(input[3]);



    luggagePrice = luggagePrice20 / luggageQuantity;

    if (luggageWeight < 10) {
        luggagePrice = luggagePrice20 * 0.2;
    } else if (luggageWeight <= 20) {
        luggagePrice = luggagePrice20 * 0.5;
    } else {
        luggagePrice = luggagePrice20
    }

    if (daysRemaining > 30) {
        luggagePrice += luggagePrice * 0.1;
    } else if (daysRemaining >= 7 && daysRemaining <= 30) {
        luggagePrice += luggagePrice * 0.15;
    } else if (daysRemaining < 7) {
        luggagePrice += luggagePrice * 0.40;
    }

    luggagePrice *= luggageQuantity;

    console.log(`The total price of bags is: ${luggagePrice.toFixed(2)} lv. `)
}

addBags(["30", "18", "15", "2"]);