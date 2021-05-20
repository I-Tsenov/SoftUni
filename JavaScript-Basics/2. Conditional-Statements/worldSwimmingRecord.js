function worldSwimmingRecord(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);


    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = (distance * time) + delay;

    if (worldRecord > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
    else {
        console.log(`No, he failed! He was ${(totalTime - worldRecord).toFixed(2)} seconds slower.`);
    }
}


worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"])


