function counterStrike(input) {
  let initialEnergy = Number(input.shift());
  let winCount = 0;

  while ((distance = input.shift()) !== "End of battle") {
    distance = Number(distance);

    if (initialEnergy < distance) {
      console.log(`Not enough energy! Game ends with ${winCount} won battles and ${initialEnergy} energy`);
      return;
    }

    winCount++;
    initialEnergy -= distance;

    if (winCount % 3 === 0) {
      initialEnergy += winCount;
    }
  }
  console.log(`Won battles: ${winCount}. Energy left: ${initialEnergy}`);
}

// every third won battle increases energy by the win counter
// end cases - run out of energy or "End of battle"

counterStrike(["100", 10, 10, 10, 1, 2, 3, 74, 12]);
counterStrike([200, 54, 14, 28, 13, "End of battle"]);
