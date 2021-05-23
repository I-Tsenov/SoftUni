function studentInfo(name, age, avrgrade) {
    let studentAge = Number (age);
    let grade = Number (avrgrade);

    console.log (`Name: ${name}, Age: ${studentAge}, Grade: ${grade.toFixed(2)}`)


}

studentInfo ("John", 15, 5.54678);
studentInfo ("Steve", 16, 2.1426);