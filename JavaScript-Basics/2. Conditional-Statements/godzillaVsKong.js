function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let priceClothesPerExtra = Number(input[2]);

    let extrasCost = extras * priceClothesPerExtra;
    let DecorCost = budget * 0.10;

    if (extras > 150) {
        extrasCost = extrasCost * 0.90
    }

    let totalMovieCost = extrasCost + DecorCost;

    if (budget < totalMovieCost) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalMovieCost - budget).toFixed(2)} leva more.`);
    }
    else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - totalMovieCost).toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
