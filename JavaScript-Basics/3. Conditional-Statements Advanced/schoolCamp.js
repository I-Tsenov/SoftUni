function schoolCamp(input) {
    let season = input[0];
    let typeOfGroup = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    let sport = "";
    let price = 0;

    if (typeOfGroup === "mixed") {

        switch (season) {
            case "Winter":
                sport = "Ski";
                price = (students * 10) * nights; break;
            case "Spring":
                sport = "Cycling";
                price = (students * 9.50) * nights; break;
            case "Summer":
                sport = "Swimming";
                price = (students * 20) * nights; break;
        }

    } else if (typeOfGroup === "girls") {

        switch (season) {
            case "Winter":
                sport = "Gymnastics";
                price = (students * 9.60) * nights; break;
            case "Spring":
                sport = "Athletics";
                price = (students * 7.20) * nights; break;
            case "Summer":
                sport = "Volleyball";
                price = (students * 15) * nights; break;
        }
    } else if (typeOfGroup === "boys") {

        switch (season) {
            case "Winter":
                sport = "Judo";
                price = (students * 9.60) * nights; break;
            case "Spring":
                sport = "Tennis";
                price = (students * 7.20) * nights; break;
            case "Summer":
                sport = "Football";
                price = (students * 15) * nights; break;
        }
    }
    if (students >= 10 && students < 20) {
        price = price * 0.95;
    } else if (students >= 20 && students < 50) {
        price = price * 0.85;
    } else if (students >= 50) {
        price = price * 0.5;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`)
}

schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);