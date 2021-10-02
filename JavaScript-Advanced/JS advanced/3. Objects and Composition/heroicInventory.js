function heroicInventory (arr) {
const heroes = [];
    for (const hero of arr) {
        let [name, level, items] = hero.split(' / ')
        level = Number(level)
        items = items ? items.split(', ') : [];

        heroes.push({name, level, items})
    }

    return JSON.stringify(heroes);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
))