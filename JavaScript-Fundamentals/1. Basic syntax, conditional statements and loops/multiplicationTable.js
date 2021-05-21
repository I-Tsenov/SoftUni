function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let multiplication = num * i;
    console.log(`${num} X ${i} = ${multiplication}`);
  }
}

multiplicationTable(5);
