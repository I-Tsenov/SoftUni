function coins(input) {

    let coinCount = 0;
    let coins = Number(input[0]) * 100;

    while (coins > 0) {
        if (coins - 200 >= 0) {
            coins -= 200;
            coinCount++
        } else if (coins - 100 >= 0) {
            coins -= 100;
            coinCount++
        } else if (coins - 50 >= 0) {
            coins -= 50;
            coinCount++
        } else if (coins - 20 >= 0) {
            coins -= 20;
            coinCount++
        } else if (coins - 10 >= 0) {
            coins -= 10;
            coinCount++
        } else if (coins - 5 >= 0) {
            coins -= 5;
            coinCount++
        } else if (coins - 2 >= 0) {
            coins -= 2;
            coinCount++
        } else if (coins - 1 >= 0) {
            coins -= 1;
            coinCount++
        } else {
            break;
        }
    }
    console.log(coinCount);
}


coins(["1.23"]);