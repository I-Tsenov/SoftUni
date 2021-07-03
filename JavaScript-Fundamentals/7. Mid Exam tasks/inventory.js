function inventory(input) {

    let inventory = input.shift().split(', ');
    let command = input.shift().split(' - ')

    while (command[0] !== "Craft!") {

        let item = command[1];

        switch (command[0]) {

            case "Collect": collect(item); break;
            case "Drop": drop(item); break;
            case "Combine Items": combine(item); break;
            case "Renew": renew(item); break;
        }

        command = input.shift().split(' - ')
    }

    function collect(item) {
        if (!inventory.includes(item)) {
            inventory.push(item);
        }
    }
    function drop(item) {
        if (inventory.includes(item)) {
            let index = inventory.indexOf(item);
            inventory.splice(index, 1);
        }
    }
    function combine(item) {
        let [oldItem, newItem] = item.split(':');
        if (inventory.includes(oldItem)) {
            let index = inventory.indexOf(oldItem);
            inventory.splice(index + 1, 0, newItem)
        }
    }
    function renew(item) {
        if (inventory.includes(item)) {
            let index = inventory.indexOf(item);
            let renewed = inventory.splice(index, 1);
            inventory.push(renewed);
        }
    }

    console.log(inventory.join(", "))
}

inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])
