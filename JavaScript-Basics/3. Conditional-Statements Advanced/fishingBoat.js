function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let price = 0;

    switch (season) {
        case "Spring":
            if (fishermen <= 6) {
                price = 3000 - 3000 * 0.10;
            } else if (fishermen >= 7 && fishermen <= 11) {
                price = 3000 - 3000 * 0.15;
            } else {
                price = 3000 - 3000 * 0.25;
            }
            break;
        case "Summer":
        case "Autumn":
            if (fishermen <= 6) {
                price = 4200 - 4200 * 0.10;
            } else if (fishermen >= 7 && fishermen <= 11) {
                price = 4200 - 4200 * 0.15;
            } else {
                price = 4200 - 4200 * 0.25;
            }
            break;
        case "Winter":
            if (fishermen <= 6) {
                price = 2600 - 2600 * 0.10;
            } else if (fishermen >= 7 && fishermen <= 11) {
                price = 2600 - 2600 * 0.15;
            } else {
                price = 2600 - 2600 * 0.25;
            }
            break;
    }

    if (fishermen % 2 === 0 && season !== "Autumn") {
        price = price - price * 0.05;
    }

    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);

