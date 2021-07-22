function happyTeaCup(arr) {

    arr = arr.map(Number)
    let orders = arr.shift();

    let total = 0
    let order = ''

    for (let i = 0; i < orders; i++) {
        const pricePerCapsule = arr.shift();
        const daysInMonth = arr.shift();
        const capsuleCount = arr.shift();
        orderPrice = (daysInMonth * capsuleCount) * pricePerCapsule;
        total += orderPrice;
        order += `The price for the coffee is: $${orderPrice.toFixed(2)}\n`
    }

    return `${order.trim()}\nTotal: $${total.toFixed(2)}`
}


console.log(happyTeaCup(["1",
    "1.53",
    "30",
    "8"]))

console.log(happyTeaCup(["2",
    "4.99",
    "31",
    "3",
    "0.35",
    "31",
    "5"]))
