function previousDay(year, month, date) {
    let randomDate = new Date(year, month - 1, date)
    randomDate.setDate(date - 1);
    console.log(`${randomDate.getFullYear()}-${randomDate.getMonth() + 1}-${randomDate.getDate()}`);
}

previousDay(2016, 9, 30)