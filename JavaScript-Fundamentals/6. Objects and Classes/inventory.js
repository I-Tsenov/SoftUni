function inventory(arr) {

    let heroes = [];

    for (let i = 0; i < arr.length; i++) {

        const currentHero = arr[i].split(" / ");                        // let [hero, level, items] = arr[i].split(' / ');
        let heroName = currentHero.shift();
        let heroLevel = currentHero.shift();                                 // heroLevel = level
        let heroItems = currentHero.shift().split(", ").sort();       // heroItems = items

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        }

        heroes.push(hero)
    }

    heroes
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items.join(", ")}`);
        })

    // for (let i = 0; i < heroes.length; i++) {
    //     const currentObj = heroes[i];
    //     console.log(`Hero: ${currentObj["name"]}`);
    //     console.log(`level => ${currentObj["level"]}`);
    //     console.log(`items => ${currentObj["items"].join(", ")}`);
    // }
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])

/*
1. обхождаме масива и взимаме данните на всеки герой
2. обработваме стринга като го сплитваме (превръщаме в масив) и правим променливи за името и левъла
3. взимаме предметите като слайсваме остатъка от масива
4. създаваме обект в който да пазим информацията за сегашния герой
5. правим масив от обекти - герои
6. преди да принтираме, подреждаме обектите по левъл възходящо и предметите по азбучен ред
7. принтираме според дадения ни формат
*/