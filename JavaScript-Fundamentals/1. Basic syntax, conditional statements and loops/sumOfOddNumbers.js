function sumOfOdd(input) {
  let oddCounter = 0;
  let sum = 0;

  for (let i = 1; i <= 100; i += 2) {
    console.log(i);

    oddCounter++;
    sum += i;

    if (oddCounter === input) {
      break;
    }
  }

  console.log(`Sum: ${sum}`);
}

sumOfOdd(3);
