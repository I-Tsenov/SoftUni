function nationalCourt(input) {

    input = input.map(Number);
    let people = input.pop();
    let efficiency = 0;
    let hourCount = 0;

    for (const answers of input) {
        efficiency += answers;
    }

    while (people > 0) {

        hourCount++

        if (hourCount % 4 !== 0) {
            people -= efficiency;
        }

    }

    console.log(`Time needed: ${hourCount}h.`);
}


nationalCourt(["5", "6", "4", "20"])
nationalCourt(["1", "2", "3", "45"])


// решение на Виктор от подготовката

/*

*/