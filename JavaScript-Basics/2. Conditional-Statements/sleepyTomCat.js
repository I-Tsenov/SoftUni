function sleepyTomCat(input) {
    let restDays = Number(input[0]);
    let norm = 30000;
    let minutesPerWorkDay = 63;
    let minutesPerHoliday = 127;
    let daysInYear = 365;

    let yearlyMinutesWhenWorking = (daysInYear - restDays) * minutesPerWorkDay;
    let yearlyMinutesWhenResting = restDays * minutesPerHoliday;
    let totalMinutesYearly = yearlyMinutesWhenResting + yearlyMinutesWhenWorking;
    
    let normDrift = Math.abs (norm - totalMinutesYearly);
    let totalMinutes = Math.abs(normDrift % 60);
    let totalHours = Math.abs((normDrift - totalMinutes) / 60);

    if (totalMinutesYearly > norm) {
        console.log("Tom will run away")
        console.log(`${totalHours} hours and ${totalMinutes} minutes more for play`);
    }
    else {
        console.log("Tom sleeps well");
        console.log(`${totalHours} hours and ${totalMinutes} minutes less for play`)
    }

}

sleepyTomCat(["20"]);
sleepyTomCat(["113"]);
