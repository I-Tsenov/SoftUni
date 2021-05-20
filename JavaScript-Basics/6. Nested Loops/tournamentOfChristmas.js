function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let dayCount = 1;
    let dayWinnings = 0;
    let totalWinnings = 0;
    let winDay = 0;
    let loseDay = 0;

    while (days >= dayCount) {

        let winCounter = 0;
        let loseCounter = 0;
        let command = input[index];
        index++;

        while (command !== "Finish") {

            let result = input[index]
            index++

            switch (result) {
                case "win":
                    winCounter++;
                    dayWinnings += 20;
                    break;
                case "lose":
                    loseCounter++;
                    break;

            }

            command = input[index];
            index++;
        }

        if (winCounter > loseCounter) {
            winDay++
            dayWinnings *= 1.1;
            totalWinnings += dayWinnings;
        } else {
            loseDay++;
            totalWinnings += dayWinnings;
        }

        dayWinnings = 0
        dayCount++
    }
    if (winDay > loseDay) {
        totalWinnings *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalWinnings.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalWinnings.toFixed(2)}`)
    }

}


// tournamentOfChristmas(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"])
tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])
