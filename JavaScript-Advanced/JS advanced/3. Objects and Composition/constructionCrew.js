function constructionCrew(worker) {

    let requaredAmountWater = worker.weight * worker.experience * 0.1;
    
    if (worker.dizziness === true)  {
        worker['levelOfHydrated'] = requaredAmountWater;
        worker.dizziness = false;
    }

    return worker;
}

console.log(constructionCrew(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
))

//Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters
//The required amount is 0.1ml per kilogram per year of experience. The required amount must be added to the existing amount