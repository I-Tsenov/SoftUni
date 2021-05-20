function metricConverter(input) {
    let numberConvert = Number(input[0]);
    let metricStart = input[1];
    let metricFinal = input[2];

    if (metricStart === "mm") {
        numberConvert = numberConvert / 1000;
    }
    else if (metricStart === "cm") {
        numberConvert = numberConvert / 100;
    }
    else {
        numberConvert = numberConvert;
    }
    
    if (metricFinal === "mm") {
        numberConvert = numberConvert * 1000;
    }
    else if (metricFinal === "cm") {
        numberConvert = numberConvert * 100;
    }
    else {
        numberConvert = numberConvert;
    }

    console.log(numberConvert.toFixed(3));
}

metricConverter(["12", "mm", "m"]);
metricConverter(["150", "m", "cm"]);
metricConverter(["45", "cm", "mm"]);