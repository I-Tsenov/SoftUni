function mountainRun(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let dinstancePerSecond = Number(input[2]);



    let drag = Math.floor(distanceInMeters / 50) * 30;
    let personalTime = (distanceInMeters * dinstancePerSecond) + drag;

    if (personalTime < recordInSeconds) {
        console.log(`Yes! The new record is ${personalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${(personalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    }

}

mountainRun(["10164", "1400", "25"])
mountainRun(["5554.36", "1340", "3.23"])
