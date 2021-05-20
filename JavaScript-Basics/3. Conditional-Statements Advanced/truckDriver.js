function truckDriver(input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);
    let paycheck = 0;

    if (kmPerMonth <= 5000) {

        switch (season) {
            case "Spring":
            case "Autumn": paycheck = (kmPerMonth * 0.75) * 4; break;
            case "Summer": paycheck = (kmPerMonth * 0.90) * 4; break;
            case "Winter": paycheck = (kmPerMonth * 1.05) * 4; break;
        }

    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {

        switch (season) {
            case "Spring":
            case "Autumn": paycheck = (kmPerMonth * 0.95) * 4; break;
            case "Summer": paycheck = (kmPerMonth * 1.10) * 4; break;
            case "Winter": paycheck = (kmPerMonth * 1.25) * 4; break;
        }

    } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {

        paycheck = (kmPerMonth * 1.45) * 4;

    }

    paycheck = paycheck * 0.9;  // след 10% такси ;(

    console.log (paycheck.toFixed(2))

}

truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);