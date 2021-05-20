function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let location = "";
    let roofType = "";
    let price = 0;

    if (budget <= 1000) {

        roofType = "Camp";

        switch (season) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.65;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.45;
                break;
        }
    } else if (budget > 1000 && budget <= 3000) {

        roofType = "Hut";

        switch (season) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.80;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.60;
                break;
        }
    } else if (budget > 3000) {

        roofType = "Hotel";
        price = budget * 0.9;

        switch (season) {
            case "Summer":
                location = "Alaska";
                break;
            case "Winter":
                location = "Morocco";
                break;
        }
    }
    console.log (`${location} - ${roofType} - ${price.toFixed(2)}`)

}

vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["1100", "Summer"]);
vacation(["5000", "Winter"]);
vacation(["2543.99", "Winter"]);