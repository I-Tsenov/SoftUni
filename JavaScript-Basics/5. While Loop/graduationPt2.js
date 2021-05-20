function graduationPt2(input) {

    let gradeSum = 0;
    let yearGrade = 0;
    let index = 0;
    let isFailed = 0;
    let studentName = input[index];
    index++;
    let currentGrade = Number(input[index]);
    index++

    while (currentGrade >= 2) {
        yearGrade += 1;
        gradeSum += currentGrade;

        if (currentGrade < 4) {
            isFailed += 1;
        }

        currentGrade = Number(input[index]);
        index++
    }

    let averageGrade = gradeSum / (input.length - 1);

    if (isFailed === 2) {
        yearGrade -= 1;
        console.log(`${studentName} has been excluded at ${yearGrade} grade`)
    } else {
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduationPt2(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
graduationPt2(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
