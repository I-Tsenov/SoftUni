function timeToWalk(stepsNeeded, feetSize, speedKm_h) {

    let distanceMeters = stepsNeeded * feetSize;
    let speedMetersSec = speedKm_h / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);  //почивката в минути
 
    let timeSec = (Math.round(time % 60)).toFixed(0).padStart(2, "0");
    let timeMin = (Math.floor(time / 60) + rest).toFixed(0).padStart(2, "0");  // без tofixed и padstart - долният лог
    let timeHr = (Math.floor(time / 3600)).toFixed(0).padStart(2, "0");

    // console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
    console.log(`${timeHr}:${timeMin}:${timeSec}`)
}

timeToWalk(4000, 0.60, 5)