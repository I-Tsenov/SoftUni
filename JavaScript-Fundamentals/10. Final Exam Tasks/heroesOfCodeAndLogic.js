function heroesCodeLogic(input) {

    let heroes = {}

    let actions = {
        CastSpell,
        TakeDamage,
        Recharge,
        Heal
    }

    let numberOfHeroes = input.shift();

    for (let i = 0; i < numberOfHeroes; i++) {
        let hero = input.shift();
        let [name, hp, mana] = hero.split(' ');

        if (heroes[name] === undefined) {
            heroes[name] = [hp, mana].map(Number)
        }
    }

    console.log(heroes)

    while ((command = input.shift()) !== 'End') {
        let [action, ...params] = command.split(' - ');
        actions[action](...params);
    }

    let sortedHeroes = Object.entries(heroes).sort((a, b) => {
        hpA = a[1][0];
        hpB = b[1][0];
        nameA = a[0];
        nameB = b[0];

        return hpB - hpA || nameA.localeCompare(nameB);
    })

    for (const [name,[health, mana]] of sortedHeroes) {
        console.log(`${name}\n  HP: ${health}\n  MP: ${mana}`)
    }

    function CastSpell(name, manaNeeded, spell) {
        manaNeeded = Number(manaNeeded)

        if (heroes[name][1] >= manaNeeded) {
            heroes[name][1] -= manaNeeded;
            console.log(`${name} has successfully cast ${spell} and now has ${heroes[name][1]} MP!`);
        } else {
            console.log(`${name} does not have enough MP to cast ${spell}!`);
        }
    }

    function TakeDamage(name, dmg, attacker) {
        dmg = Number(dmg)
        heroes[name][0] -= dmg

        if (heroes[name][0] > 0) {
            console.log(`${name} was hit for ${dmg} HP by ${attacker} and now has ${heroes[name][0]} HP left!`);
        } else {
            console.log(`${name} has been killed by ${attacker}!`)
            delete heroes[name];
        }
    }

    function Recharge(name, amount) {
        amount = Number(amount)
        let mana = heroes[name][1];

        mana += amount;

        if (mana > 200) {
            amount = 200 - heroes[name][1];
            mana = 200
        }
        heroes[name][1] = mana
        console.log(`${name} recharged for ${amount} MP!`)
    }

    function Heal(name, amount) {
        amount = Number(amount)
        let health = heroes[name][0];

        health += amount;

        if (health > 100) {
            amount = 100 - heroes[name][0];
            health = 100
        }
        heroes[name][0] = health

        console.log(`${name} healed for ${amount} HP!`)
    }
}

heroesCodeLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])