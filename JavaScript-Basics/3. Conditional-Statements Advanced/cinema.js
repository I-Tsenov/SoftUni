function cinema(input) {
    let typeProjection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;
    let seats = rows * columns;

    switch (typeProjection) {
        case "Premiere":
            income = seats * 12;
            break;
        case "Normal":
            income = seats * 7.5;
            break;
        case "Discount":
            income = seats * 5;
            break;
    }

    console.log(`${income.toFixed(2)} leva`)

}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
