function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let shieldsBroken = 0;
    let armorsBroken = 0;
    let helmetTrashed = Math.floor(lostFights / 2) * helmetPrice;
    let swordTrashed = Math.floor(lostFights / 3) * swordPrice;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 3 == 0 && i % 2 == 0) {
            shieldsBroken++;
            if (shieldsBroken % 2 == 0) {
                armorsBroken++
            }
        }
    }
    let shieldsTrashed = shieldsBroken * shieldPrice;
    let armorsTrashed = armorsBroken * armorPrice;

    let expenses = helmetTrashed + swordTrashed + shieldsTrashed + armorsTrashed;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}


gladiatorExpenses(7, 2, 3, 4, 5)