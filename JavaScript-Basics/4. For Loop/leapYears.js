function leapYears (input){
    let leapYear = Number (input[0]);
    let randomYear = Number (input[1]);

    for (let i = leapYear; i <= randomYear; i+=4) {
       console.log(i)
    }
}

leapYears(["1908","1919"])
