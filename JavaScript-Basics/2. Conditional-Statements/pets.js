function pets(input) {
    let days = Number(input[0]);
    let foodInKgLeft = Number(input[1]);
    let dogFoodPerDayInKg = Number(input[2]);
    let catFoodPerDayInKg = Number(input[3]);
    let turtleFoodPerDayInKg = Number(input[4]) / 1000;  //от грамове в килограми

    let totalFoodNeededPerDay = dogFoodPerDayInKg + catFoodPerDayInKg + turtleFoodPerDayInKg;
    let totalFoodNeededWhileAway = totalFoodNeededPerDay * days;

    if (totalFoodNeededWhileAway <= foodInKgLeft) {
        console.log(`${Math.floor(foodInKgLeft - totalFoodNeededWhileAway)} kilos of food left.`);
    }
    else {
        console.log(`${Math.ceil(totalFoodNeededWhileAway - foodInKgLeft)} more kilos of food are needed.`);
    }

}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);
