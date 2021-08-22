function crusade(input) {

    let soldiers = {}
    let actions = {
        Add,
        Attack,
        Delete
    }

    while ((command = input.shift()) !== 'Results') {
        let [action, name, ...params] = command.split(':');
        actions[action](name, ...params)
    }

    let sorted = Object.entries(soldiers).sort((a, b) => b[1].health - a[1].health || a[0].localeCompare(b[0]))

    console.log(`People count: ${sorted.length}`);
    for (const [name, { health, energy }] of sorted) {
        console.log(`${name} - ${health} - ${energy}`)
    }

    function Add(name, health, energy) {
        health = Number(health);
        energy = Number(energy);
        if (!soldiers.hasOwnProperty(name)) {
            soldiers[name] = { health, energy };
        } else {
            soldiers[name].health += health;
        }
    }
    function Attack(attkName, defName, damage) {
        damage = Number(damage);
        if (soldiers.hasOwnProperty(attkName) && soldiers.hasOwnProperty(defName)) {
            soldiers[defName].health -= damage;
            soldiers[attkName].energy -= 1;
            if (soldiers[defName].health <= 0) {
                console.log(`${defName} was disqualified!`)
                delete soldiers[defName];
            }
            if (soldiers[attkName].energy === 0) {
                console.log(`${attkName} was disqualified!`)
                delete soldiers[attkName];
            }
        }
    }
    function Delete(name) {
        if (name === 'All') {
            soldiers = {};
        }
        if (soldiers.hasOwnProperty(name)) {
            delete soldiers[name]
        }
    }
}

crusade(["Add:Bonnie:3000:5",
"Add:Kent:10000:10",
"Add:Peter:7000:1",
"Add:Johny:4000:10",
"Attack:Johny:Bonnie:400",
"Add:Johny:3000:5",
"Delete:Kent",
"Results"])

