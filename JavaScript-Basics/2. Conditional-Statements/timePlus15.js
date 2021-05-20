function timePlus15(input) {

  let hour = Number(input[0]);
  let minutes = Number(input[1]) + 15;

  if (minutes >= 60) {
    minutes -= 60;
    hour += 1;
  }

  if (hour >= 24) {
    hour -= 24;
  }

  if (minutes < 10) {
    console.log(`${hour}:0${minutes}`);
  }
  else {
    console.log(`${hour}:${minutes}`);
  }

}

timePlus15(["1", "46"]);
timePlus15(["0", "01"]);
timePlus15(["23", "59"]);
timePlus15(["11", "08"]);
timePlus15(["12", "49"]);