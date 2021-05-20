function matchTickets(input) {
    let budget = Number(input[0]);
    let ticketType = input[1];
    let peopleCount = Number(input[2]);
    let totalPrice = 0;

    if (peopleCount >= 1 && peopleCount <= 4) {
        budget = budget - (budget * 0.75);
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        budget = budget - (budget * 0.60);
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        budget = budget - (budget * 0.50);
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        budget = budget - (budget * 0.40);
    } else if (peopleCount >= 50) {
        budget = budget - (budget * 0.25);
    }

    if (ticketType === "Normal") {
        totalPrice = 249.99 * peopleCount;
    } else if (ticketType === "VIP") {
        totalPrice = 499.99 * peopleCount;
    }

    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice-budget).toFixed(2)} leva.`);
    }
}

matchTickets(["50000", "Normal", "200"])
// matchTickets(["1000", "Normal", "1"]);
// matchTickets(["30000", "VIP", "49"]);