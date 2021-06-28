function towns(arr) {

    for (let i = 0; i < arr.length; i++) {

        let currentRow = arr[i].split(" | ");

        let currentTown = currentRow[0];
        let currentLatitude = Number(currentRow[1]).toFixed(2);
        let currentLongitude = Number(currentRow[2]).toFixed(2);

        let newTownCoordinates = {
            town: currentTown,
            latitude: currentLatitude,
            longitude: currentLongitude
        }

        console.log(newTownCoordinates);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
