function flowers(input) {
    let chrysanthemumsBought = Number(input[0]);
    let rosesBought = Number(input[1]);
    let tulipsBought = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];

    let totalFlowerPrice = 0;
    let totalFlowerBought = chrysanthemumsBought + rosesBought + tulipsBought;

    switch (season) {
        case "Spring":
        case "Summer":
            totalFlowerPrice = (chrysanthemumsBought * 2.00) + (rosesBought * 4.1) + (tulipsBought * 2.50);

            if (isHoliday === "Y") {
                totalFlowerPrice = totalFlowerPrice * 1.15;
            }
            if (tulipsBought > 7 && season === "Spring") {
                totalFlowerPrice = totalFlowerPrice * 0.95;
            }
            break;
        case "Autumn":
        case "Winter":
            totalFlowerPrice = (chrysanthemumsBought * 3.75) + (rosesBought * 4.50) + (tulipsBought * 4.15);

            if (isHoliday === "Y") {
                totalFlowerPrice = totalFlowerPrice * 1.15;
            }
            if (rosesBought >= 10 && season === "Winter") {
                totalFlowerPrice = totalFlowerPrice * 0.90;
            } break;
    }


    if (totalFlowerBought > 20) {
        totalFlowerPrice = totalFlowerPrice * 0.8;
    }
    console.log((totalFlowerPrice + 2).toFixed(2))
}


flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);