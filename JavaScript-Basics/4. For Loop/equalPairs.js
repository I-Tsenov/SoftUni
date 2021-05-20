function equalPairs(input) {
  let n = Number(input.shift());
  let lastPair = 0;
  let maxDiff = 0;

  for (let i = 0; i < n; i++) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());

    let currentPair = num1 + num2;

    if (i > 0) {
      let diff = Math.abs(currentPair - lastPair);
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
    lastPair = currentPair;
  }
  if (maxDiff === 0) {
    console.log(`Yes, value=${lastPair}`);
  } else {
    console.log(`No, maxdiff=${maxDiff}`);
  }
}

equalPairs([3, 1, 2, 0, 3, 4, -1]);
