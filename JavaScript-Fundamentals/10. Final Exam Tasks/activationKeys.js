function activationKeys(input) {
  let actions = {
    Contains(substr) {
      if (activationKey.includes(substr)) {
        console.log(`${activationKey} contains ${substr}`);
      } else {
        console.log("Substring not found!");
      }
      return activationKey;
    },
    Flip(casing, start, end) {
      let first = activationKey.substring(0, start);
      let second = activationKey.substring(start, end);
      let third = activationKey.substring(end);

      if (casing === "Upper") {
        second = second.toLocaleUpperCase();
      } else if (casing === "Lower") {
        second = second.toLocaleLowerCase();
      }

      activationKey = first + second + third;
      console.log(activationKey);
      return activationKey;
    },
    Slice(start, end) {
      let substrForDel = activationKey.slice(start, end);
      activationKey = activationKey.replace(substrForDel, "");
      console.log(activationKey);
      return activationKey;
    }
  };

  let activationKey = input.shift();

  for (const line of input) {
    if (line === "Generate") {
      break;
    }
    let [action, ...params] = line.split(">>>");
    activationKey = actions[action](...params);
  }

  console.log(`Your activation key is: ${activationKey}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
