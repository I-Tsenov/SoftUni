function fruitMarket(input) {

    let strawberryPrice = Number (input[0]);
    let bananasWeight = Number (input[1]);
    let orangesWeight = Number (input[2]);
    let raspberryWeight = Number (input[3]);
    let strawberryWeight = Number (input[4]);

    let raspberryPrice = strawberryPrice * 0.5;
    let orangesPrice = raspberryPrice - (raspberryPrice*0.4);
    let bananasPrice = raspberryPrice - (raspberryPrice*0.8);

    let strawberrySum = strawberryPrice * strawberryWeight;
    let bananasSum = bananasPrice * bananasWeight;
    let orangesSum = orangesPrice * orangesWeight;
    let raspberrySum = raspberryPrice * raspberryWeight;


    let totalMoneyNeeded = strawberrySum + raspberrySum + bananasSum + orangesSum;

    console.log (totalMoneyNeeded)
}

fruitMarket(["48","10","3.3","6.5","1.7"])
