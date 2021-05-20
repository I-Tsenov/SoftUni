function firm(input) {
    let hoursNeeded = Number(input[0]);
    let daysLimitation = Number(input[1]);
    let overTimeWorkers = Number(input[2]);
    let workHours = 8;
    let overTime = 2;

    unavailableHours = (daysLimitation - (daysLimitation * 0.10)) * workHours;
    overTimeHours = overTimeWorkers * (overTime * daysLimitation);

    totalHours = Math.floor(unavailableHours + overTimeHours);

    if (totalHours >= hoursNeeded) {
        console.log(`Yes!${totalHours - hoursNeeded} hours left.`)
    }
    else {
        console.log(`Not enough time!${hoursNeeded - totalHours} hours needed.`)
    }
}

firm(["90", "7", "3"]);
firm(["99", "3", "1"]);