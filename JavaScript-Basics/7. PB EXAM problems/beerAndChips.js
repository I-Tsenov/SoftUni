function beerAndChips(input) {

    let nameFan = input[0];
    let budget = Number(input[1]);
    let beerBottles = Number(input[2]);
    let chipsPackets = Number(input[3]);

    let beerPrice = 1.20;
    let totalBeerPrice = beerBottles * beerPrice;
    let chipsPrice = totalBeerPrice * 0.45;
    let totalChipsPrice = Math.ceil(chipsPackets * chipsPrice);

    totalPrice = totalBeerPrice + totalChipsPrice;

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`${nameFan} bought a snack and has ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`${nameFan} needs ${moneyNeeded.toFixed(2)} more leva!`);
    }

}

beerAndChips(["George", "10", "2", "3"]);