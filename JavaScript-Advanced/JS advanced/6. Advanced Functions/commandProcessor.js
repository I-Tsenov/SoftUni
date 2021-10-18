function solution() {

    let targetStr = ''

    let actions = {
        append(str) {
            targetStr += str;
        },
        removeStart(num) {
            targetStr = targetStr.slice(num)
        },
        removeEnd(num) {
            targetStr = targetStr.slice(0, -num)
        },
        print() {
            console.log(targetStr);
        }
    }

    return actions;
}


let firstZeroTest = solution();

console.log(firstZeroTest)

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

