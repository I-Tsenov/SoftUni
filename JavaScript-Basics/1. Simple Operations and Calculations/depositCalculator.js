function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let percent = Number(input[2]);

    let finalResult = depositSum + depositPeriod * ((depositSum * percent / 100) / 12);

    console.log(finalResult);

}
depositCalculator(["200", "3", "5.7"])