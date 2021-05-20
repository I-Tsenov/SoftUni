function transportPrice(input) {

    let kilometers = Number(input[0]);
    let phaseCicle = (input[1]);

    let taxiDayPrice = 0.70 + 0.79 * kilometers;
    let taxiNightPrice = 0.70 + 0.90 * kilometers;
    let busPrice = 0.09 * kilometers;
    let trainPrice = 0.06 * kilometers;

    if ((kilometers < 20 && phaseCicle === "day") && taxiDayPrice < taxiNightPrice) {
        console.log(taxiDayPrice.toFixed(2));
    }
    else if (kilometers < 20 && phaseCicle === "night") {
        console.log(taxiNightPrice.toFixed(2));
    }
    if (kilometers >= 20 && kilometers < 100) {
        console.log(busPrice.toFixed(2));
    }
    if (kilometers >= 100) {
        console.log(trainPrice.toFixed(2));
    }

}

transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);