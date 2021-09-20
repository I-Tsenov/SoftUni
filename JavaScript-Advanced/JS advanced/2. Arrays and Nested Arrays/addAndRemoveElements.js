function addAndRemove(arr) {

    let workArray = [];
    let initial = 1;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 'add') {
            workArray.push(i + initial)
        } else if (arr[i] === 'remove') {
            workArray.pop()
        }
    }
    if (workArray.length > 0) {
        return workArray.join('\n')
    } else {
        return "Empty"
    }
}

console.log(addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']));