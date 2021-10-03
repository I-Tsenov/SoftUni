function townsToJSON(input) {

    let cityCoordinateTable = [];

    let [town, latitude, longitude] = input.shift().match(/\w+/g);

    for (const line of input) {
        let [town, latitude, longitude] = line.split('|')
        .filter(x => x !== '')
        .map(x => x.trim())
        .map(x => isNaN(x) ? x : Number(Number(x).toFixed(2)));
        
        let cityPosition = {
            'Town': town,
            'Latitude': latitude,
            'Longitude': longitude
        };

        cityCoordinateTable.push(cityPosition)
    }

    return JSON.stringify(cityCoordinateTable)
}


console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));