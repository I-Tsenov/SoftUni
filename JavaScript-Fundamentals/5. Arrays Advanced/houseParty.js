function houseParty(arr) {

    let guestList = [];

    for (let element of arr) {

        let name = element.split(" ")[0];

        if (!element.includes("not")) {

            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }

        } else {

            if (guestList.includes(name)) {
                guestList.splice(guestList.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    return guestList.join("\n")
}

console.log(houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']));
console.log(houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']));