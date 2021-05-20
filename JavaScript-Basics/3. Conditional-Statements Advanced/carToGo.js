function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let carClass = "";
    let carType = "";
    let carPrice = 0;


    switch (season) {
        case "Winter":
            
            carType = "Jeep";

            if (budget <= 100) {
                carClass = "Economy class";
                carPrice = budget * 0.65;
            } else if (budget > 100 && budget <= 500) {
                carClass = "Compact class";
                carPrice = budget * 0.80;
            } break;
        case "Summer":
            carType = "Cabrio";

            if (budget <= 100) {
                carClass = "Economy class";
                carPrice = budget * 0.35;
            } else if (budget > 100 && budget <= 500) {
                carClass = "Compact class";
                carPrice = budget * 0.45;
            } break;
    }

    if (budget > 500) {
        carClass = "Luxury class"
        carType = "Jeep"
        carPrice = budget * 0.90;
    }
    
    console.log (carClass);
    console.log (`${carType} - ${carPrice.toFixed(2)}`)

}

carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["1010", "Summer"]);