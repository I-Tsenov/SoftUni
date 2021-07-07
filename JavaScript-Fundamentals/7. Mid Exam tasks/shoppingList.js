function shoppingList(input) {

    let productMemo = input.shift().split("!");

    let command = input.shift();

    while (command !== "Go Shopping!") {

        let [order, item, newItem] = command.split(" ");

        switch (order) {
            case "Urgent": urgent(item); break;
            case "Unnecessary": unnecessary(item); break;
            case "Correct": correct(item, newItem); break;
            case "Rearrange": rearrange(item); break;
        }

        command = input.shift();

    }

    function urgent(item) {
        if (!productMemo.includes(item)) {
            productMemo.unshift(item)
        }
    }

    function unnecessary(item) {

        if (productMemo.includes(item)) {
            let index = productMemo.indexOf(item);
            productMemo.splice(index, 1);
        }
    }

    function correct(item, newItem) {

        if (productMemo.includes(item)) {
            let index = productMemo.indexOf(item);
            productMemo[index] = newItem;
        }
    }

    function rearrange(item) {
        if (productMemo.includes(item)) {
            let index = productMemo.indexOf(item);
            productMemo.splice(index, 1)
            productMemo.push(item);
        }
    }
    return productMemo.join(", ");
}

// console.log(shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]));
console.log(shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Mango", "Unnecessary Mango", "Correct Pepper Onion", "Rearrange Water", "Correct Tomatoes Potatoes", "Go Shopping!"]));
