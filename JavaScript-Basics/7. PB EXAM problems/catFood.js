function catFood(input) {
    let cats = Number(input[0]);
    let priceOfFoodKg = 12.45;
    let smallGroup = 0;
    let bigGroup = 0;
    let hugeGroup = 0;
    let totalFoodNeeded = 0;

    for (let i = 1; i <= cats; i++) {
        let foodPerCat = Number(input[i]);

        totalFoodNeeded += foodPerCat;

        if (foodPerCat >= 100 && foodPerCat < 200) {
            smallGroup++;
        } else if (foodPerCat >= 200 && foodPerCat < 300) {
            bigGroup++;
        } else if (foodPerCat >= 300 && foodPerCat < 400) {
            hugeGroup++;
        }
    }

    let pricePerDay = (totalFoodNeeded / 1000) * priceOfFoodKg;

    console.log(`Group 1: ${smallGroup} cats.`);
    console.log(`Group 2: ${bigGroup} cats.`);
    console.log(`Group 3: ${hugeGroup} cats.`);
    console.log(`Price for food per day: ${pricePerDay.toFixed(2)} lv.`)

}


catFood(["6", "102", "236", "123", "399", "342", "222"])
