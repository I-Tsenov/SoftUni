function aluminumJoinery(input) {
    let orderQuantity = Number(input[0]);
    let typeOfProduct = input[1];
    let typeOfDelivery = input[2];

    let price = 0;

    switch (typeOfProduct) {

        case "90X130":

            price = 110 * orderQuantity;

            if (orderQuantity > 30 && orderQuantity <= 60) {
                price -= price * 0.05;
            } else if (orderQuantity > 60) {
                price -= price * 0.08;
            } 
            break;

        case "100X150":

            price = 140 * orderQuantity;

            if (orderQuantity > 40 && orderQuantity <= 80) {
                price -= price * 0.06;
            } else if (orderQuantity > 80) {
                price -= price * 0.10;
            }
            break;

        case "130X180":

            price = 190 * orderQuantity;

            if (orderQuantity > 20 && orderQuantity <= 50) {
                price -= price * 0.07;
            } else if (orderQuantity > 50) {
                price -= price * 0.12;
            }
            break;

        case "200X300":

            price = 250 * orderQuantity;

            if (orderQuantity > 25 && orderQuantity <= 50) {
                price -= price * 0.09;
            } else if (orderQuantity > 50) {
                price -= price * 0.14;
            } 
            break;

        default: break;

    }

    if (typeOfDelivery === "With delivery") {
        
        price += 60;
    }

    if (orderQuantity > 99) {

        price -= price * 0.04

    }

    if (orderQuantity >= 10) {

        console.log(`${price.toFixed(2)} BGN`);

    } else {

        console.log("Invalid order");

    }
}

aluminumJoinery(["40", "90X130", "Without delivery"]);
aluminumJoinery(["105", "100X150", "With delivery"]);
aluminumJoinery(["2", "130X180", "With delivery"]);