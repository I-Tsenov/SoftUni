function areaVolumeCalc(area, vol, dataAsJSON) {

    const figures = JSON.parse(dataAsJSON)
    let result = figures.map(f => ({ area: area.call(f), volume: vol.call(f) }));      // алтернатива на долното решение

    //     const result = [];

    //     for (let figure of figures) {

    //         let figureMeasure = {
    //             area: area.call(figure),
    //             volume: vol.call(figure)
    //         }

    //         result.push(figureMeasure);
    //     }

    return result;
}

console.log(areaVolumeCalc(area, vol, '[{ "x": "1", "y": "2", "z": "10" }, { "x": "7", "y": "7", "z": "10" }, { "x": "5", "y": "2", "z": "10" }]'))

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};

