function shootForTheWin(input) {
  let targets = input.shift().split(" ").map(Number);
  let targetsDown = 0;

  while ((shootIndex = input.shift()) !== "End") {
    shootIndex = Number(shootIndex);
    let currenTarget = targets[shootIndex];

    if (currenTarget === undefined) {
      continue;
    }

    targets[shootIndex] = -1;
    targetsDown++;

    for (let i = 0; i < targets.length; i++) {
      let element = targets[i];
      if (element !== -1) {
        if (element > currenTarget) {
          targets[i] -= currenTarget;
        } else {
          targets[i] += currenTarget;
        }
      }
    }
  }
  console.log(`Shot targets: ${targetsDown} -> ${targets.join(" ")}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
