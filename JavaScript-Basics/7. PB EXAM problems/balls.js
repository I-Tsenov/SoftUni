function balls(input) {

    let quantity = Number(input[0]);
    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let blackCount = 0;
    let otherCount = 0;
    let points = 0;

    for (i = 1; i <= quantity; i++) {
        let currentColor = input[i];

        switch (currentColor) {

            case "red": points += 5; redCount++; break;
            case "orange": points += 10; orangeCount++; break;
            case "yellow": points += 15; yellowCount++; break;
            case "white": points += 20; whiteCount++; break;
            case "black": points /= 2; blackCount++; break;
            default: otherCount++; break;

        }
    }

console.log (`Total points: ${Math.floor(points)}`);
console.log (`Points from red balls: ${redCount}`);
console.log (`Points from orange balls: ${orangeCount}`);
console.log (`Points from yellow balls: ${yellowCount}`);
console.log (`Points from white balls: ${whiteCount}`);
console.log (`Other colors picked: ${otherCount}`);
console.log (`Divides from black balls: ${blackCount}`);


}

balls(["3", "white", "black", "pink"])