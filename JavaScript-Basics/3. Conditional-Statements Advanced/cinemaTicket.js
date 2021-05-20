function cinemaTicket(input) {
    let day = input[0];

    switch (day) {
        case "Wednesday":
        case "Thursday": console.log(14); break;
        case "Saturday":
        case "Sunday": console.log(16); break;
        default: console.log(12); break;
    }

}

cinemaTicket(["Monday"]);
cinemaTicket(["Friday"]);
cinemaTicket(["Sunday"]);