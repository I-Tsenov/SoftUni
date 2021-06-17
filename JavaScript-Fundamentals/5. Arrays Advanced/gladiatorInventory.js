function gladiatorInventory(arr) {

    let inventory = arr.shift().split(" ");

    for (let commands of arr) {

        let currentCommand = commands.split(" ");
        let order = currentCommand[0];

        switch (order) {
            case "Buy": buy(currentCommand); break;
            case "Trash": trash(currentCommand); break;
            case "Repair": repair(currentCommand); break;
            case "Upgrade": upgrade(currentCommand); break;
        }
    }

    function buy(currentCommand) {

        if (!inventory.includes(currentCommand[1])) {
            inventory.push(currentCommand[1])
        }

    }
    function trash(currentCommand) {

        let indexToTrash = inventory.indexOf(currentCommand[1]);

        if (inventory.includes(currentCommand[1])) {
            inventory.splice(indexToTrash, 1)
        }

    }

    function repair(currentCommand) {

        if (inventory.includes(currentCommand[1])) {

            let indexToRepair = inventory.indexOf(currentCommand[1]);
            let repairedItem = inventory.splice(indexToRepair, 1);
            inventory = inventory.concat(repairedItem);
        }
    }

    function upgrade(currentCommand) {

        let upgradeArray = currentCommand[1].replace("-", " ").split(" ");
        let equipment = upgradeArray[0];
        let upgrade = upgradeArray[1];

        let indexToUpgrade = inventory.indexOf(upgradeArray[0])

        if (inventory.includes(equipment)) {
            inventory.splice(indexToUpgrade + 1, 0, `${equipment}:${upgrade}`);
        }
    }
    return inventory.join(" ");
}

console.log(gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']))
