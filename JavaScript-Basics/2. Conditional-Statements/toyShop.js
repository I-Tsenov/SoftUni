function toyShop(input) {
    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let fluffyBearsCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalToyCount = puzzleCount + dollCount + fluffyBearsCount + minionCount + truckCount;
    let budget = (puzzleCount * 2.60 + dollCount * 3 + fluffyBearsCount * 4.10 + minionCount * 8.2 + truckCount * 2) * 0.90;

    if (totalToyCount >= 50) {
        budget = budget * 0.75;
    }

    if (budget >= holidayPrice) {
        console.log(`Yes! ${(budget - holidayPrice).toFixed(2)} lv left.`);
    }
    else {
        console.log(`Not enough money! ${(holidayPrice - budget).toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);