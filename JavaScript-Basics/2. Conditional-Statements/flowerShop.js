function flowerShop(input) {
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let giftPrice = Number(input[4]);

    let priceMagnolias = 3.25;
    let priceHyacinths = 4;
    let priceRoses = 3.50;
    let priceCactuses = 8;

    let flowerIncome = (magnolias * priceMagnolias) + (hyacinths * priceHyacinths) + (roses * priceRoses) + (cactuses * priceCactuses);
    let totalIncomeAfterTaxes = flowerIncome - (flowerIncome * 0.05);
    //5% данък на цялата сума

    if (totalIncomeAfterTaxes >= giftPrice) {
        console.log(`She is left with ${Math.floor(totalIncomeAfterTaxes - giftPrice)} leva.`);
    }
    else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - totalIncomeAfterTaxes)} leva.`);
    }
}

flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);