function scoringSystem(input) {

    attendancies = input.map(Number);
    let bonusList = [];

    let students = attendancies.shift();
    let lectureCount = attendancies.shift();
    let initialBonus = attendancies.shift();

    for (let studentAttend of attendancies) {
        let totalBonus = (studentAttend / lectureCount) * (5 + initialBonus);
        bonusList.push(totalBonus)
    }
    
    attendancies.sort((a, b) => a - b);
    bonusList.sort((a, b) => a - b);

    maxAttend = attendancies.pop();
    maxBonus = bonusList.pop();

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttend} lectures.`)

    // 90 / 100 
}

scoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])

scoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])

// разпределяме инпута като шифтваме нужните елементи докато останат само attendancies
// правим цикъл, който да минава през останалите елементи и ги манипулира чрез дадената формула
// намираме макс бонус
// намираме макс присъствия
// принтираме зададените данни

/*                                     Алтернативно решение

function bonusScoringSystem(arr) {
    let studentsCount = Number(arr.shift());
    let allLectures = Number(arr.shift());
    let initialBonus = Number(arr.shift());
    let maxAtt = 0;
    let maxBonus = 0;
    for (let i = 0; i < studentsCount; i++) {
        let attendances = arr[i];
        let bonus = (attendances / allLectures) * (5 + initialBonus);
        if (bonus >= maxBonus) {
            maxBonus = bonus;
            maxAtt = attendances;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAtt} lectures.`);
}

*/