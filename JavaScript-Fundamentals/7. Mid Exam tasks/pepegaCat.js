function pepegaCat(itemRatings, entryIndex, typeToBreak) {

    let position = '';

    let sumLeft = itemRatings.slice(0, entryIndex).filter(el => filterByType(el)).reduce((a, b) => a + b, 0);
    let sumRight = itemRatings.slice(entryIndex + 1,).filter(el => filterByType(el)).reduce((a, b) => a + b, 0);

    if (sumLeft >= sumRight) {
        position = 'Left';
        return `${position} - ${sumLeft}`
    } else {
        position = 'Right'
        return `${position} - ${sumRight}`
    }
    
    function filterByType(el) {
        if (typeToBreak === 'expensive') {
            return el >= itemRatings[entryIndex]
        } else if (typeToBreak === 'cheap') {
            return el < itemRatings[entryIndex]
        }
    }
}


console.log(pepegaCat([1, 5, 1],
    1,
    "cheap"))

console.log('------')

console.log(pepegaCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive"))
