function fuelTank(input) {
    let fuelType = input[0];
    let fuelInLiters = Number(input[1]);
    let promoCard = input[2];
    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;

    if (fuelType === "Gasoline") {
        if (promoCard === "Yes") {
            gasolinePrice = (gasolinePrice - 0.18) * fuelInLiters;
        }
        else {
            gasolinePrice = gasolinePrice * fuelInLiters;
        }
        if (fuelInLiters >= 20 && fuelInLiters <= 25) {
            gasolinePrice = gasolinePrice - (gasolinePrice * 0.08);
        }
        else if (fuelInLiters > 25) {
            gasolinePrice = gasolinePrice - (gasolinePrice * 0.10);
        }
        console.log(`${(gasolinePrice).toFixed(2)} lv.`);
    }
    if (fuelType === "Diesel") {
        if (promoCard === "Yes") {
            dieselPrice = (dieselPrice - 0.12) * fuelInLiters;
        }
        else {
            dieselPrice = dieselPrice * fuelInLiters;
        }
        if (fuelInLiters >= 20 && fuelInLiters <= 25) {
            dieselPrice = dieselPrice - (dieselPrice * 0.08);
        }
        else if (fuelInLiters > 25) {
            dieselPrice = dieselPrice - (dieselPrice * 0.10);
        }
        console.log(`${(dieselPrice).toFixed(2)} lv.`);
    }
    if (fuelType === "Gas") {
        if (promoCard === "Yes") {
            gasPrice = (gasPrice - 0.08) * fuelInLiters;
        }
        else {
            gasPrice = gasPrice * fuelInLiters;
        }
        if (fuelInLiters >= 20 && fuelInLiters <= 25) {
            gasPrice = gasPrice - (gasPrice * 0.08);
        }
        else if (fuelInLiters > 25) {
            gasPrice = gasPrice - (gasPrice * 0.10);
        }
        console.log(`${(gasPrice).toFixed(2)} lv.`);
    }
}

fuelTank(["Gas", "30", "Yes"]);
fuelTank(["Gasoline", "25", "No"]);
fuelTank(["Diesel", "19", "No"]);