function backToThePast(input) {

    let budget = Number(input[0]);
    let finalYear = Number(input[1]);
    let personYears = 18;
    let moneySpent = 0;

    for (let i = 1800; i <= finalYear; i++) {

        if (i % 2 === 0) {
            moneySpent += 12000;
        } else {
            moneySpent += 12000 + (50*personYears);
        }
        personYears++;
    }

    if (budget >= moneySpent) {
        console.log(`Yes! He will live a carefree life and will have ${(budget - moneySpent).toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${(moneySpent - budget).toFixed(2)} dollars to survive.`)
    }
}

backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);

/*for (let i = 1800; i <= finalYear; i += 2) {
    personYears++;
    moneySpent = budget - 12000;

}
for (let i = 1801; i <= finalYear; i += 2) {
    personYears++;
    moneySpent = budget - 12000 + 50 * personYears;
} */

// Yes! He will live a carefree life and will have {N} dollars left.  +
// He will need {М} dollars to survive.   -