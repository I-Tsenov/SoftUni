
// НЕ Е РЕШЕНА, нужна е информация за прототипи и унаследяване


function cars(input) {

    let actions = {
        create(name) {
            name = {};
        },
        inherit(name, typeOfCommand, parentName) {   // не работи
            name = Object.assign(name, parentName);
        },
        set(name, key, value) {
            name[key] = value;
        },
        print(name) {
            let output = [];
            for (const key in name) {
                output.push(`${key}:${name[key]}`)
            }
            console.log(output.join(','))
        }
    }

    input.forEach(command => {
        let [action, name, ...params] = command.split(' ');
        if (command.length > 2 && params.includes('inherit')) {
            action = 'inherit';
        }
        actions[action](name, ...params);
    });

}

cars([
    'create c1',
    'set c1 color red',
    'create c2 inherit c1',
    'set c2 model new',
    'print c1',
    'print c2'
])