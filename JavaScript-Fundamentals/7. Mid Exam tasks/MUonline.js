function muOnline(arr) {

    let health = 100;
    let coins = 0;
    let index = 0;
    let roomCounter = 0;
    let tempHealth = 0

    let toString = arr.toString();

    let toArray = toString.replace(/\|/g, " ").split(" ")

    while (health > 0) {

        roomCounter++;
        let currentObject = toArray[index++];
        let currentNumber = Number(toArray[index++]);

        switch (currentObject) {

            case "potion":
                tempHealth = health;
                health += currentNumber;
                if (health > 100) {
                    currentNumber = 100 - tempHealth;
                    health = 100;
                }
                console.log(`You healed for ${currentNumber} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                coins += currentNumber;
                console.log(`You found ${currentNumber} bitcoins.`);
                break;

            default:
                health -= currentNumber;
                if (health > 0) {
                    console.log(`You slayed ${currentObject}.`);
                } else {
                    console.log(`You died! Killed by ${currentObject}.`);
                    console.log(`Best room: ${roomCounter}`);
                }
                break;
        }
        if (index === toArray.length) {
            break;
        }
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}