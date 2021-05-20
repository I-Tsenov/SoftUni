function goldMine(input) {

    let index = 0;
    let locations = Number(input[index]);
    index++

    for (i = 0; i < locations; i++) {

        let expectedAverage = Number(input[index]);
        index++;
        let daysPerLocation = Number(input[index]);
        index++

        let goldPerLocation = 0;
        let days = 0;

        while (daysPerLocation > days) {
            let goldPerDay = Number(input[index]);
            index++;

            goldPerLocation += goldPerDay;
            days++
        }

        averageGold = goldPerLocation / days;

        if (averageGold >= expectedAverage) {
            console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);
        } else {
            let goldNeeded = expectedAverage - averageGold;
            console.log(`You need ${goldNeeded.toFixed(2)} gold.`);
        }


    }

}

goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"])
