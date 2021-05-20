function vacationBookList(input) {

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let result = (pages / pagesPerHour) / days;

    console.log(result);

}

vacationBookList(["212", "20", "2"])