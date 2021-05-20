function logistics(input) {

    let weightCount = Number(input[0]);
    let pricePerTon = 0;
    let totalWeight = 0;
    let microbus = 0;
    let truck = 0;
    let train = 0;

    for (let i = 1; i <= weightCount; i++) {
        let tonsOfWeight = Number(input[i]);

        totalWeight += tonsOfWeight;

        if (tonsOfWeight <= 3) {
            pricePerTon += tonsOfWeight * 200;
            microbus += tonsOfWeight;
        } else if (tonsOfWeight >= 4 && tonsOfWeight < 12) {
            pricePerTon += tonsOfWeight * 175;
            truck += tonsOfWeight;
        } else {
            pricePerTon += tonsOfWeight * 120;
            train += tonsOfWeight;
        }
    }

    let averagePricePerTon = pricePerTon / totalWeight;
    let weightByBus = microbus / totalWeight * 100;
    let weightByTruck = truck / totalWeight * 100;
    let weightByTrain = train / totalWeight * 100;

    console.log(averagePricePerTon.toFixed(2));
    console.log(`${weightByBus.toFixed(2)}%`);
    console.log(`${weightByTruck.toFixed(2)}%`)
    console.log(`${weightByTrain.toFixed(2)}%`)

}

logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);