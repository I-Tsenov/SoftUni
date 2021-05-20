function accountBalance(input) {
    
    let total = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "NoMoreMoney") {
    
        let increase = Number (command)
        
        if (increase < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += increase;
        console.log(`Increase: ${increase.toFixed(2)}`);

        command = input[index];
        index++
        
    }

    console.log(`Total: ${total.toFixed(2)}`);
}


accountBalance(["5.51", "69.42", "100", "NoMoreMoney"])
