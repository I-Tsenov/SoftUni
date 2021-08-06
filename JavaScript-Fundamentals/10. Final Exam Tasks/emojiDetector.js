function emojiDetector(input) {
  let text = input[0];
  let numberPattern = /\d/g;
  let emojiPattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g;

  let coolTreshHold = text
    .match(numberPattern)
    .map(Number)
    .reduce((a, b) => a * b, 1);
  let emojiMatches = text.match(emojiPattern);

  console.log(`Cool threshold: ${coolTreshHold}`);
  console.log(`${emojiMatches.length} emojis found in the text. The cool ones are:`);

  for (let emoji of emojiMatches) {
    let word = emoji.slice(2, -2);
    let coolness = 0;
    for (let i = 0; i < word.length; i++) {
      coolness += word.charCodeAt(i);
    }
    if (coolness > coolTreshHold) {
      console.log(emoji);
    }
  }
}

emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);
