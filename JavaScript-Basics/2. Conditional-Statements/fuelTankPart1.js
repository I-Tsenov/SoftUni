function fuelTank(input) {
    let fuelType = (input[0]).toLowerCase();
    let litersInTank = Number(input[1]);



    if ((fuelType === "diesel") || (fuelType === "gasoline") || (fuelType === "gas")) {

        if (litersInTank >= 25) {
            console.log(`You have enough ${fuelType}.`);
        }
        else if (litersInTank < 25) {
            console.log(`Fill your tank with ${fuelType}!`);
        }
    }

    else {
        console.log("Invalid fuel!");
    }

}

fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);