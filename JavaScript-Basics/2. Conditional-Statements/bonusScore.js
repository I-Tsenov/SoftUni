function bonusScore(input) {

    let points = Number(input[0]);
    let bonusPoints = 0;

    if (points <= 100) {
        bonusPoints = 5;
    }
    else if (points <= 1000) {
        bonusPoints = points * 0.20;
    }
    else if (points > 1000) {
        bonusPoints = points * 0.10;
    }
    if (points % 2 === 0) {
        bonusPoints = bonusPoints + 1;
    }
    else if (points % 10 === 5) {
        bonusPoints = bonusPoints + 2;
    }

    console.log(bonusPoints);
    console.log(points + bonusPoints);
}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);