function harvest(input) {
    let xArea = Number(input[0]);
    let yGrape = Number(input[1]);
    let zWine = Number(input[2]);
    let workers = Number(input[3]);
    let grapePerLiterWine = 2.5;

    let totalGrape = xArea * yGrape;
    let totalWine = 0.4 * totalGrape / grapePerLiterWine;

    if (totalWine < zWine) {
        console.log(`It will be a tough winter! More ${Math.floor(zWine - totalWine)} liters wine needed.`);
    }
    else if (totalWine >= zWine) {
        let winePerWorker = (totalWine - zWine) / workers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`);
        console.log(`${Math.ceil(totalWine - zWine)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }
}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);