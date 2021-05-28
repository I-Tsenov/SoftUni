function DungeonestDark(arr) {

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
                console.log(`You found ${currentNumber} coins.`);
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
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

DungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
DungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);



    // ако първата част е potion - you are healed с даденото число, максимум кръв 100  // You healed for {0} hp.  // Current health: {0} hp."
    // ако първата част е chest - значи намираме монети  //  You found {0} coins.
    // в противен случай се бием с чудовище, даденото число е атаката на чудовището, премахваме атаката на чудовището от кръвта си
    //    ако кръвта ни е повече от 0 убиваме чудовището // ("You slayed {monster}.")
    //    ако сме мъртви // "You died! Killed by {monster}."  и принтираме най-добрата ни стая // "Best room: {room}".
    // ако минем през всички стаи на подземията // "You've made it!", "Coins: {coins}", "Health: {health}".