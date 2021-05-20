function examPreparation(input) {

    let index = 0;
    let goodGrades = 0;
    let badGrade = 0;
    let sum = 0;
    let lastTask = "";
    let consecutiveBadGrades = Number(input[index]);
    index++;
    let task = input[index];
    index++

    while (badGrade < consecutiveBadGrades) {
        let grade = Number(input[index]);
        index++;
        lastTask = task;
        task = input[index];
        index++

        goodGrades++
        sum += grade;

        if (grade <= 4) {
            badGrade++
        }

        if (task === "Enough") {
            let averageGrade = sum / goodGrades;
            console.log(`Average score: ${averageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${goodGrades}`);
            console.log(`Last problem: ${lastTask}`);
            break;
        }
    }
    if (badGrade >= consecutiveBadGrades) {
        console.log(`You need a break, ${badGrade} poor grades.`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
