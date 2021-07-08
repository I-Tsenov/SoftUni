function legendaryFarming(input) {

    function comparePreciousMats(a, b) {
        {
            let valueA = a[1];
            let valueB = b[1];

            if (valueA === valueB) {
                let matA = a[0];
                let matB = b[0];
                return matA.localeCompare(matB);
            }

            return valueB - valueA;
        }
    }

    let keyMaterials = {
        "motes": 0,
        "shards": 0,
        "fragments": 0
    };
    let junkMaterials = {};
    let legendaryItem = '';

    materials = input.split(' ');

    for (let i = 0; i < materials.length; i += 2) {
        let quantity = Number(materials[i]);
        let resource = materials[i + 1].toLowerCase();

        switch (resource) {
            case "motes":
            case "shards":
            case "fragments":
                keyMaterials[resource] += quantity;

                if (keyMaterials[resource] >= 250) {
                    keyMaterials[resource] -= 250;
                    switch (resource) {
                        case "motes": legendaryItem = "Dragonwrath"; break;
                        case "shards": legendaryItem = "Shadowmourne"; break;
                        case "fragments": legendaryItem = "Valanyr"; break;
                    }
                    console.log(`${legendaryItem} obtained!`);
                } break;
            default:
                if (!junkMaterials.hasOwnProperty(resource)) {       
                    junkMaterials[resource] = 0;
                }
                junkMaterials[resource] += quantity;
                break;
        }
        if (legendaryItem !== '') {
            break;
        }
    }

    let junk = Object.entries(junkMaterials);
    let preciousMats = Object.entries(keyMaterials);
    junk.sort();
    // console.log(preciousMats)
    preciousMats.sort(comparePreciousMats);

    for (const [resource, quantity] of preciousMats) {
        console.log(`${resource}: ${quantity}`);
    }
    for (const [resource, quantity] of junk) {
        console.log(`${resource}: ${quantity}`);
    }

}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
legendaryFarming('3 Motes 5 stones 255 Shards 6 leathers 255 fragments 7 Shards')
