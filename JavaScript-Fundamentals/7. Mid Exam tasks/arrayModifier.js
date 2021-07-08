function arrayModifier(arr) {

    let initialArr = arr.shift().split(' ').map(Number);

    let actions = {
        swap,
        multiply,
        decrease
    }

    let [command, index1, index2] = arr.shift().split(' ');

    while (command !== "end") {

        [index1, index2] = [index1, index2].map(Number);
        
        actions[command](index1, index2);

        [command, index1, index2] = arr.shift().split(' ');
    }

    function swap(index1, index2) {
        let firstNum = initialArr[index1];
        let secondNum = initialArr[index2];
        initialArr.splice(index1, 1, secondNum);
        initialArr.splice(index2, 1, firstNum);

    }
    function multiply(index1, index2) {
        let multyplyResult = initialArr[index1] * initialArr[index2];
        initialArr.splice(index1, 1, multyplyResult)
    }
    function decrease() {
        initialArr = initialArr.map(e => e - 1)
    }

    return initialArr.join(', ')
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])