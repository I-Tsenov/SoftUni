function chocoBiscuit(arr) {

    let thePlan = arr.shift().split(', ');

    let actions = {
        OutOfStock,
        Required,
        Last
    }

    while ((commands = arr.shift()) !== 'No More Money') {

        let [command, biscuit, index] = commands.split(' ');
        actions[command](biscuit, index)
    }

    return thePlan.filter(el => el !== 'None').join(' ');

    function OutOfStock(biscuit) {
        if (thePlan.indexOf(biscuit) !== -1) {
            thePlan.forEach(b => {
                if (b === biscuit) {
                    thePlan[thePlan.indexOf(b)] = 'None'
                }
            });
        }
    }
    function Required(biscuit, index) {
        index = Number(index);
        if (index > 0 && index <= thePlan.length && thePlan[index] !== 'None') {
            thePlan[index] = biscuit
        }
    }
    function Last(biscuit) {
        thePlan.push(biscuit)
    }
}


// console.log(chocoBiscuit(["Vanilla, Chocolate, Raspberry, Chocolate",
//     "OutOfStock Chocolate",
//     "Required BBB 3",
//     "No More Money"]));

console.log(chocoBiscuit(["Vanilla, Chocolate, Raspberry, Vegan",
"Required SB 3",
"OutOfStock Walnuts",
"No More Money"]))