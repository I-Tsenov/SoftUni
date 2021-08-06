function pirates(input) {

  let actions = {
    Plunder,
    Prosper
  }

  let targets = {};

  while ((line = input.shift()) != 'Sail') {
    let [town, people, gold] = line.split('||');
    [people, gold] = [people, gold].map(Number);

    if (targets[town] === undefined) {
      targets[town] = { people, gold };
    } else {
      targets[town].people += people;
      targets[town].gold += gold
    }
  }

  while ((line = input.shift()) != 'End') {
    let [action, town, ...params] = line.split('=>');
    params = params.map(Number)
    actions[action](town, params)
  }

  let sorted = Object.entries(targets).sort((a, b) => {
    goldA = a[1].gold;
    goldB = b[1].gold;
    nameA = a[0];
    nameB = b[0];

    return goldB - goldA || nameA.localeCompare(nameB)
  })

  let count = sorted.length

  console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`)

  for (const [target, { people, gold }] of sorted) {
    console.log(`${target} -> Population: ${people} citizens, Gold: ${gold} kg`)
  }


  function Plunder(town, params) {

    let [people, gold] = params
    targets[town].people -= people;
    targets[town].gold -= gold;

    console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)

    if (targets[town].gold <= 0 || targets[town].people <= 0) {
      console.log(`${town} has been wiped off the map!`)
      delete targets[town]
    }
  }

  function Prosper(town, params) {
    let gold = params[0]
    if (gold < 0) {
      return console.log(`Gold added cannot be a negative number!`)
    }
    targets[town].gold += gold;
    console.log(`${gold} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`)
  }
}

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);

console.log('--------------------------------------');

// pirates([
//   "Nassau||95000||1000",
//   "San Juan||930000||1250",
//   "Campeche||270000||690",
//   "Antalia||5000||350",
//   "Port Royal||320000||1000",
//   "Port Royal||100000||2000",
//   "Sail",
//   "Prosper=>Port Royal=>-200",
//   "Plunder=>Nassau=>94000=>750",
//   "Plunder=>Nassau=>1000=>150",
//   "Plunder=>Campeche=>150000=>690",
//   "End"
// ])