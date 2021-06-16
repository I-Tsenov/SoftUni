function ceaserCypher(input, k) {
  k = Number(k);
  let output = "";
  let [smallAlphabet, capitalAlphabet] = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ];

  for (let char of input) {
    if (smallAlphabet.includes(char)) {
      let index = smallAlphabet.indexOf(char);
      char = smallAlphabet[(index + k) % smallAlphabet.length];
    }
    if (capitalAlphabet.includes(char)) {
      let index = capitalAlphabet.indexOf(char);
      char = capitalAlphabet[(index + k) % capitalAlphabet.length];
    }
    output += char;
  }
}

ceaserCypher("fascism", 3);
