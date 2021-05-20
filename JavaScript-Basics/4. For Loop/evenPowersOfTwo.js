function evenPowersOfTwo(input) {
    let n = Number(input[0]);

    for (i = 0; i <= n; i += 2) {
        let pow = Math.pow(2, i)
        console.log(pow);
    }
}
evenPowersOfTwo(["6"]);
