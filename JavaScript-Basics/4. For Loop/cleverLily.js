function cleverLily(input) {
    let age = Number(input[0]);
    let washMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCountSum = 0;
    let moneyCountSum = 0;
    let moneyIncrease = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyCountSum = moneyCountSum + moneyIncrease;
            moneyCountSum -= 1;   // крадливия брат
            moneyIncrease += 10;

        } else {
            toyCountSum += 1;
        }
    }

    let totalMoneyMade = moneyCountSum + (toyCountSum * toyPrice);

    if (totalMoneyMade >= washMachinePrice) {
        let moneyLeft = totalMoneyMade - washMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washMachinePrice - totalMoneyMade;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }

}

cleverLily(["10", "170", "6"]);
cleverLily(["21", "1570.98", "3"]);