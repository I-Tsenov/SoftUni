function smallShop(input) {
    let stock = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let result = 0;

    switch (city) {
        case "Sofia":
            switch (stock) {
                case "coffee":
                    result = quantity * 0.5;
                    break;
                case "water":
                    result = quantity * 0.8;
                    break;
                case "beer":
                    result = quantity * 1.2;
                    break;
                case "sweets":
                    result = quantity * 1.45;
                    break;
                case "peanuts":
                    result = quantity * 1.6;
                    break;
            } break;
        case "Plovdiv":
            switch (stock) {
                case "coffee":
                    result = quantity * 0.4;
                    break;
                case "water":
                    result = quantity * 0.7;
                    break;
                case "beer":
                    result = quantity * 1.15;
                    break;
                case "sweets":
                    result = quantity * 1.30;
                    break;
                case "peanuts":
                    result = quantity * 1.50;
                    break;
            } break;
        case "Varna":
            switch (stock) {
                case "coffee":
                    result = quantity * 0.45;
                    break;
                case "water":
                    result = quantity * 0.7;
                    break;
                case "beer":
                    result = quantity * 1.1;
                    break;
                case "sweets":
                    result = quantity * 1.35;
                    break;
                case "peanuts":
                    result = quantity * 1.55;
                    break;
            } break;
    }
    console.log(result);
}

smallShop(["coffee", "Varna", "2"])
smallShop(["peanuts", "Plovdiv", "1"])
smallShop(["beer", "Sofia", "6"])
smallShop(["water", "Plovdiv", "3"])
smallShop(["sweets", "Sofia", "2.23"])
