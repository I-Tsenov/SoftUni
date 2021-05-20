function grades(input) {
    let studentCount = Number(input[0]);
    let sumOfGrades = 0;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;


    for (let i = 1; i <= studentCount; i++) {
        let grade = Number(input[i]);

        sumOfGrades += grade

        if (grade >= 2.00 && grade <= 2.99) {
            group1++;
        } else if (grade >= 3.00 && grade <= 3.99) {
            group2++;
        } else if (grade >= 4.00 && grade <= 4.99) {
            group3++;
        } else if (grade >= 5) {
            group4++;
        }
    }
    let averageGrade = sumOfGrades / studentCount;
    group1 = group1 / studentCount * 100;
    group2 = group2 / studentCount * 100;
    group3 = group3 / studentCount * 100;
    group4 = group4 / studentCount * 100;

    console.log(`Top students: ${group4.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${group3.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${group2.toFixed(2)}%`);
    console.log(`Fail: ${group1.toFixed(2)}%`)
    console.log(`Average: ${averageGrade.toFixed(2)}`)

}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
