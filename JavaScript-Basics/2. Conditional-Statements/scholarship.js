function scholarship(input) {

    let income = Number(input[0]);
    let averageGrade = Number(input[1]);
    let minWage = Number(input[2]);
    let socialScholarship = minWage * 0.35;
    let smartScholarship = averageGrade * 25;



    if ((income > minWage && averageGrade < 5.5) || averageGrade < 4.5) {
        console.log("You cannot get a scholarship!");
    }
    else if (income < minWage && (averageGrade < 5.5 || socialScholarship > smartScholarship)) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    }
    else if ((averageGrade >= 5.5 && socialScholarship <= smartScholarship) || averageGrade >= 5.5) {
        console.log(`You get a scholarship for excellent results ${Math.floor(smartScholarship)} BGN`);
    }
}

scholarship(["480.00", "5.60", "450.00"]);
