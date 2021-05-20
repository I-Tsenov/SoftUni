function vacation(input) {

    let target = Number(input[0]);
    let startingMoney = Number(input[1]);
    let index = 2;
    let days = 0;
    let consecutiveDays = 0;

    while (startingMoney < target) {
        let action = input[index++];
        let amount = Number(input[index++]);
        days++

        if (action === "spend") {
            consecutiveDays++
            startingMoney -= amount;

            if (amount > startingMoney) {
                startingMoney = 0;
            }
            if (consecutiveDays === 5) {
                console.log("You can't save the money.");
                console.log(`${days}`);
                break;
            }

        } else if (action === "save") {
            consecutiveDays = 0;
            startingMoney += amount;
        }
    }

    if (startingMoney >= target) {
        console.log(`You saved the money for ${days} days.`);
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])


