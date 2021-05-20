function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinute = Number(input[3]);

    let examTimeInMinutes = (examHour * 60) + examMinute;
    let arriveTimeInMinutes = (arriveHour * 60) + arriveMinute;
    let difference = Math.abs(examTimeInMinutes - arriveTimeInMinutes);

    let h = Math.floor (difference / 60);
    let m = Math.floor (difference % 60);

    if (arriveTimeInMinutes > examTimeInMinutes) {
        console.log("Late");
    } else if (difference <= 30) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    if (examTimeInMinutes - arriveTimeInMinutes > 0) {
        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            if (difference % 60 < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
    }
    
    if (arriveTimeInMinutes - examTimeInMinutes > 0) {
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            if (difference % 60 < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        }
    }

}

// onTimeForTheExam(["9", "30", "9", "50"]);
// onTimeForTheExam(["9", "00", "8", "30"]);
// onTimeForTheExam(["16", "00", "15", "00"]);
// onTimeForTheExam(["9", "00", "10", "30"]);
// onTimeForTheExam(["14", "00", "13", "55"]);
// onTimeForTheExam(["11", "30", "8", "12"]);
// onTimeForTheExam(["10", "00", "10", "00"]);
// onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "12", "31"]);
