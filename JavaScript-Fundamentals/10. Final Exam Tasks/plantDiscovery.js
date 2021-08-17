function plantDiscovery(input) {

    let countPlants = Number(input.shift());
    let plantList = {};

    let actions = {
        Rate,
        Update,
        Reset
    }

    for (let i = 0; i < countPlants; i++) {
        let [plant, rarity] = input.shift().split('<->');
        rarity = Number(rarity)
        if (!plantList.hasOwnProperty(plant)) {
            plantList[plant] = { rarity, ratings: [], avrgRating: 0 }
        } else {
            plantList[plant].rarity = rarity;
        }
    }

    while ((command = input.shift()) !== 'Exhibition') {
     
        let [action, rest] = command.split(': ');
        let [plant, numToken] = rest.split(' - ');
        numToken = Number(numToken)

        if (!plantList.hasOwnProperty(plant)) {
            console.log('error');
            continue;
        }

        actions[action](plant, numToken);
    }

    let sorted = Object.entries(plantList).sort((a, b) => {
        rarityA = a[1].rarity;
        rarityB = b[1].rarity;
        avrgRateA = a[1].avrgRating;
        avrgRateB = b[1].avrgRating;

        return rarityB - rarityA || avrgRateB - avrgRateA;
    })

    console.log(`Plants for the exhibition:`)
    for (let [plant, {rarity, avrgRating}] of sorted) {
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${avrgRating.toFixed(2)}`)
    }

    function Rate(plant, rating) {
        plantRatings = plantList[plant].ratings;
        plantRatings.push(rating);
        plantList[plant].avrgRating = plantRatings.reduce((a, b) => a + b, 0) / plantRatings.length;
    }
    function Update(plant, newRarity) {
        plantList[plant].rarity = newRarity;
    }
    function Reset(plant) {
        plantList[plant].ratings = [];
        plantList[plant].avrgRating = 0;
    }
}

plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
])

// plantDiscovery(["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"])

