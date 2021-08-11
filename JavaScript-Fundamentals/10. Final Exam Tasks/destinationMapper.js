function destinationMapper (text) {

    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g
    let travelPoints = 0;
    let destinations = [];

    while((matches = pattern.exec(text)) !== null) {
        destinations.push(matches.groups.destination)
        travelPoints += matches.groups.destination.length
    }
    console.log(`Destinations: ${destinations.join(', ')}`)
    console.log(`Travel Points: ${travelPoints}`)
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
// destinationMapper(['Invalid/invalid==i5valid=/I5valid/=i='])
