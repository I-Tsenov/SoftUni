function christmasGifts(input) {

    let index = 0
    let adultCount = 0;
    let kidCount = 0;
    let moneyForToys = 0;
    let moneyForSweaters = 0;

    let command = input[index];
    index++

    while (command !== "Christmas") {
        let currentPersonAge = Number(command)

        if (currentPersonAge > 16) {
            adultCount++;
            moneyForSweaters += 15;
        } else {
            kidCount++;
            moneyForToys += 5;
        }

        command = input[index]
        index++
    }

    console.log(`Number of adults: ${adultCount}`);
    console.log(`Number of kids: ${kidCount}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);

}

christmasGifts(["16", "20", "46", "12", "8", "20", "49", "Christmas"])

