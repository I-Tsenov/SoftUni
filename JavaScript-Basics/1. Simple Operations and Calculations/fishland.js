function fishland(input) {

    let mackarelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let palamudWeight = Number(input[2]);
    let scadWeight = Number(input[3]);
    let clamWeight = Number(input[4]);

    let clamPrice = 7.50;
    let palamudPrice = mackarelPrice + mackarelPrice * 0.6;
    let scadPrice = spratPrice + spratPrice * 0.8;

    let totalMoneyNeeded = (clamPrice * clamWeight) + (palamudPrice * palamudWeight) + (scadPrice * scadWeight);

    console.log(totalMoneyNeeded.toFixed(2));
}

fishland([6.9, 4.20, 1.5, 2.5, 1]);
fishland([5.55, 3.57, 4.3, 3.6, 7])