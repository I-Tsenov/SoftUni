function newHouse(input) {
    let flower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);

    let rosesPrice = quantity * 5;
    let dahliasPrice = quantity * 3.8;
    let tulipPrice = quantity * 2.8;
    let narcissusPrice = quantity * 3;
    let gladioulusPrice = quantity * 2.5;

    let totalPrice = 0;

    switch (flower) {
        case "Roses":
            if (quantity > 80) {
                totalPrice = rosesPrice - (rosesPrice * 0.10);
            } else {
                totalPrice = rosesPrice
            }
            break;
        case "Dahlias":
            if (quantity > 90) {
                totalPrice = dahliasPrice - (dahliasPrice * 0.15);
            } else {
                totalPrice = dahliasPrice;
            }
            break;
        case "Tulips":
            if (quantity > 80) {
                totalPrice = tulipPrice - (tulipPrice * 0.15);
            } else {
                totalPrice = tulipPrice;
            }
            break;
        case "Narcissus":
            if (quantity < 120) {
                totalPrice = narcissusPrice + (narcissusPrice * 0.15);
            } else {
                totalPrice = narcissusPrice;
            }
            break;
        case "Gladiolus":
            if (quantity < 80) {
                totalPrice = gladioulusPrice + (gladioulusPrice * 0.20);
            } else {
                totalPrice = gladioulusPrice;
            }
            break;
    }

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }

}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);


