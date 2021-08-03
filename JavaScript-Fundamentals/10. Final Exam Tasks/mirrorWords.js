function mirrorWords([input]) {
  let pattern = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
  let mirrorWords = [];

  let matches = input.match(pattern);
  if (matches !== null) {
    console.log(`${matches.length} word pairs found!`);

    for (let match of matches) {
      match = match.slice(1, -1);
      let [firstWord, secondWord] = match.split(/\#\#|\@\@/);
      if (firstWord === secondWord.split("").reverse().join("")) {
        mirrorWords.push([`${firstWord} <=> ${secondWord}`]);
      }
    }
  } else {
    console.log("No word pairs found!");
  }

  if (mirrorWords.length === 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(mirrorWords.join(", "));
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
