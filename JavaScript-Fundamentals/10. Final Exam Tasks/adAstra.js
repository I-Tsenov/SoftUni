function adAstra(input) {

    let text = input[0];
    let totalCalories = 0;
    let pattern = /(\||#)(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>[1-9][0-9]{0,3}|10000)\1/g;
    let itemList = [];

    let matches = pattern.exec(text);

    while (matches !== null) {

        let name = matches.groups.item;
        let expDate = matches.groups.expDate;
        let calories = matches.groups.calories;
        
        totalCalories += Number(calories);
        itemList.push(`Item: ${name}, Best before: ${expDate}, Nutrition: ${calories}`)
        
        matches = pattern.exec(text);
    }

    let timeToStay = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(timeToStay)} days!`);
    console.log(itemList.join('\n'))
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])