function bestPlayer(input) {

    let index = 0;
    let goals = 0;
    let playerName = "";

    let command = input[index]

    while (command !== "END") {
        let currentPlayerName = command;
        index++
        let currentGoals = Number(input[index]);
        index++

        if (currentGoals > goals) {
            goals = currentGoals;
            playerName = currentPlayerName;
        }

        if (goals >= 10) {
            break;
        }

        command = input[index]
    }

    console.log(`${playerName} is the best player!`)
    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
    } else (
        console.log(`He has scored ${goals} goals.`)
    )

}

// bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);