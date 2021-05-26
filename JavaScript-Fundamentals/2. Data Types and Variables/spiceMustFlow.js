function spiceMustFlow(yield) {

    let production = 0;
    let daysCounter = 0;

    while (yield >= 100) {

        production += yield - 26
        yield -= 10;
        daysCounter++

        if (yield < 100) {
            production -= 26
        }
    }

    console.log(daysCounter);
    console.log(production);

}

spiceMustFlow(111);