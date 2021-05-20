function vegetableMarket(input) {

    let vegetablePrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegetableWeight = Number(input[2]);
    let fruitWeight = Number(input[3]);
    let euro = 1.94;

    let totalVegetablePrice = vegetablePrice * vegetableWeight;
    let totalFruitPrice = fruitPrice * fruitWeight;

    let totalIncome = (totalVegetablePrice + totalFruitPrice) / euro;

    console.log(totalIncome.toFixed(2));


}

vegetableMarket([0.194, 19.4, 10, 10]);