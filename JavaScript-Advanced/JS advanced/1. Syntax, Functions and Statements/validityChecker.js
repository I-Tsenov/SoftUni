function validityChecker(x1, y1, x2, y2) {

    function calculateDistanceBtwPoints(x1, y1, x2, y2) {
        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        } else if (!Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }

    calculateDistanceBtwPoints(x1, y1, 0, 0)
    calculateDistanceBtwPoints(x2, y2, 0, 0)
    calculateDistanceBtwPoints(x1, y1, x2, y2)
}

validityChecker(2, 1, 1, 1)
validityChecker(0.3, 0, 0, 0.4)