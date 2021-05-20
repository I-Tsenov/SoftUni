function skiTrip(input) {
    let days = Number(input[0]) - 1;    //изваждаме 1, понеже търсим нощувките, а не дните
    let typeOfRoom = input[1];
    let grade = input[2];
    let price = 0;

    if (days < 10) {
        switch (typeOfRoom) {
            case "room for one person":
                price = days * 18;
                break;
            case "apartment":
                price = (days * 25) - ((days * 25) * 0.3);
                break;
            case "president apartment":
                price = (days * 35) - ((days * 35) * 0.1);
                break;
        }
    }
    else if (days >= 10 && days <= 15) {
        switch (typeOfRoom) {
            case "room for one person":
                price = days * 18;
                break;
            case "apartment":
                price = (days * 25) - ((days * 25) * 0.35);
                break;
            case "president apartment":
                price = (days * 35) - ((days * 35) * 0.15);
                break;
        }
    }
    else if (days > 15) {
        switch (typeOfRoom) {
            case "room for one person":
                price = days * 18;
                break;
            case "apartment":
                price = (days * 25) - ((days * 25) * 0.50);
                break;
            case "president apartment":
                price = (days * 35) - ((days * 35) * 0.20);
                break;
        }
    }

    if (grade === "positive") {
        price = price + (price * 0.25);
    } else {
        price = price - (price * 0.1);
    }

    console.log((price).toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
