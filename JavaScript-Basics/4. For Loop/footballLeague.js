function footballLeague(input) {
    let capacity = Number(input[0]);
    let fansCount = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 2; i <= input.length; i++) {
        let fanSector = input[i];

        switch (fanSector) {
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }
    }

    sectorA = sectorA / fansCount * 100;
    sectorB = sectorB / fansCount * 100;
    sectorV = sectorV / fansCount * 100;
    sectorG = sectorG / fansCount * 100;
    let totalFans = fansCount / capacity * 100;

    console.log(`${sectorA.toFixed(2)}%`)
    console.log(`${sectorB.toFixed(2)}%`)
    console.log(`${sectorV.toFixed(2)}%`)
    console.log(`${sectorG.toFixed(2)}%`)
    console.log(`${totalFans.toFixed(2)}%`)
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);