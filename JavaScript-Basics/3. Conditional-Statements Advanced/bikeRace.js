function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let terrain = input[2];

    let totalCyclists = juniors + seniors;
    let taxIncome = 0;

    switch (terrain) {
        case "trail":
            taxIncome = (juniors * 5.5) + (seniors * 7);
            break;
        case "cross-country":

            taxIncome = (juniors * 8) + (seniors * 9.5);

            if (totalCyclists >= 50) {
                taxIncome = taxIncome - taxIncome * 0.25;
            }
            break;
        case "downhill":
            taxIncome = (juniors * 12.25) + (seniors * 13.75);
            break;
        case "road":
            taxIncome = (juniors * 20) + (seniors * 21.50);
            break;
    }

    let taxIncomeAfterCost = taxIncome - taxIncome * 0.05

    console.log(taxIncomeAfterCost.toFixed(2));

}

bikeRace(["10", "20", "trail"]);
bikeRace(["20", "25", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);