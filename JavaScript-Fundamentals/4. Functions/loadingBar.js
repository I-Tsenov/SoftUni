function loadingBar(num) {

    let bar = `[..........]`;
    let loadingBar = "";
    let result = ``;
    let load = num / 10;
    let loadPercentage = load * 10;

    if (num % 10 === 0) {

        for (let i = 0; i < bar.length; i++) {

            if (i <= load) {
                loadingBar += bar[i].replace(".", "%")
            } else {
                loadingBar += bar[i];
            }
        }
    }

    if (loadPercentage === 100) {
        result = `100% Complete! \n${loadingBar}`;
    } else {
        result = `${loadPercentage}% ${loadingBar} \nStill loading...`
    }

    return result;
}

console.log(loadingBar(50));