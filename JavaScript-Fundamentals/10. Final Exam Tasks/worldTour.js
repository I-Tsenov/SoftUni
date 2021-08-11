function worldTour(input) {

    let travelPlan = input.shift()

    let actions = {
        'Add Stop': add,
        'Remove Stop': remove,
        'Switch': swap
    }

    for (let command of input) {
        if (command === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${travelPlan}`);
            break;
        }
        let [action, ...params] = command.split(':');
        actions[action](...params);
        console.log(travelPlan)
    }

    function add(index, string) {
        index = Number(index);
        if (index >= 0 && index < travelPlan.length) {
            let firstPart = travelPlan.substring(0, index);
            let secondPart = travelPlan.substring(index);
            travelPlan = firstPart + string + secondPart;
        }
    }

    function remove(start, end) {
        [start, end] = [start, end].map(Number);
        if ((start >= 0 && start < travelPlan.length) && (end >= 0 && end < travelPlan.length)) {
            let firstPart = travelPlan.substring(0, start);
            let secondPart = travelPlan.substring(end + 1);
            travelPlan = firstPart + secondPart;
        }
    }

    function swap(oldStr, newStr) {
        if (travelPlan.includes(oldStr)) {
            travelPlan = travelPlan.split(oldStr).join(newStr)
        }
    }
}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
])