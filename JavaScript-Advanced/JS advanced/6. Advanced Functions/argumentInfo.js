function argumentInfo() {
    let counter = {};

    for (const arg of arguments) {
        type = typeof arg;
        console.log(`${type}: ${arg}`)

        if (!counter[type]) {
            counter[type] = 1
        } else {
            counter[type] += 1
        }
    }
    let sorted = Object.entries(counter).sort((a, b) => b[1] - a[1])
    sorted.forEach(([type, value]) => console.log(`${type} = ${value}`))
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })

