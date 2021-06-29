function movingTarget(input) {
  let targets = input.shift().split(" ").map(Number);
  let actions = {
    Shoot(index, power) {
      if (targets[index]) {
        targets[index] -= power;
        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }
      }
    },
    Add(index, value) {
      if (targets[index]) {
        targets.splice(index, 0, value);
      } else {
        console.log("Invalid placement!");
      }
    },
    Strike(index, radius) {
      let boomRange = 1 + (radius * 2);
      let boomStart = index - radius;
      let boomEnd = index + radius;

      if (boomStart >= 0 && boomEnd < targets.length) {
          targets.splice (boomStart, boomRange)
      } else {
          console.log("Strike missed!");
      }
    },
  };

  while ((command = input.shift()) !== "End") {
    let [action, index, param] = command.split(" ");
    [index, param] = [index, param].map(Number);
    actions[action](index, param);
  }

  console.log(targets.join("|"));
}

movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
