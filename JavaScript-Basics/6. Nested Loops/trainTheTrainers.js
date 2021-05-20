function trainTheTrainers(input) {
    let index = 0;
    let lectors = Number(input[index]);
    index++;
    let finalAssesment = 0;
    let averageGradeCounter = 0;

    let command = input[index];
    index++

    while (command !== "Finish") {
        let presentation = command;
        let presentationAverageGrade = 0;

        for (i = 1; i <= lectors; i++) {
            let currentGrade = Number(input[index]);
            presentationAverageGrade += currentGrade;
            index++
        }

        presentationAverageGrade /= lectors;
        averageGradeCounter++;
        finalAssesment += presentationAverageGrade;

        console.log(`${presentation} - ${presentationAverageGrade.toFixed(2)}.`)

        command = input[index];
        index++;
    }

    finalAssesment /= averageGradeCounter;
    console.log(`Student's final assessment is ${finalAssesment.toFixed(2)}.`)

}

// trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
