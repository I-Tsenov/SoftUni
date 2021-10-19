function add(x) {
    let sum = x;

    function calc(b) {
        sum += b;
        return calc;
    }

    calc.toString = () => sum;
    return calc;
}

console.log(add(1)(2)(3)(3).toString());
console.log(add(1)(2).toString());
