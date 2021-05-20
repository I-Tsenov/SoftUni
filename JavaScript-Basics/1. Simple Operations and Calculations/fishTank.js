function fishTank (input) {

let lenghtCm = Number (input[0]);
let widthCm = Number (input[1]);
let heightCm = Number (input[2]);
let percentBusy = Number (input[3]);
let oneLiter = 0.001;

let tankMass = lenghtCm * widthCm * heightCm * oneLiter;

let totalLitersOfWater = tankMass * (1 - percentBusy / 100 );

console.log (totalLitersOfWater);
}

fishTank (["85","75","47","17"]);


