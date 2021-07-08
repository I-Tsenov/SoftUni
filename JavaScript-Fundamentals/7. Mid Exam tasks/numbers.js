function numbers(str) {
    let numberArr = str.split(' ').map(Number).sort((a, b) => b - a);
    let avrg = numberArr.reduce((a, b) => a + b, 0) / numberArr.length;

    let greaterThanAvg = numberArr.filter(n => n > avrg);

    if (greaterThanAvg.length >= 5) {
        greaterThanAvg = greaterThanAvg.splice(0, 5)
    } else if (greaterThanAvg.length === 0 || numberArr.length <= 1) {
        return 'No'
    }

    return greaterThanAvg.join(' ');
}

console.log(numbers('10 20 30 40 50'))