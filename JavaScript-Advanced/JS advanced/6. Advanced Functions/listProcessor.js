function listProcessor(arr) {

    let collection = [];

    let actions = {
        add(str) {
            collection.push(str);
        },
        remove(str) {
            while (collection.indexOf(str) !== -1) {
                let index = collection.indexOf(str);
                collection.splice(index, 1)
            }
        },
        print() {
            console.log(collection.join(','));
        }
    }

    arr.forEach(command => {
        let [action, str] = command.split(' ');
        actions[action](str);
    });
}



listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'add peter', 'add peter', 'remove peter', 'print'])

