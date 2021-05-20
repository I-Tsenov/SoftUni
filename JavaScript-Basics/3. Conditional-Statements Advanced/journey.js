function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let moneySpend = 0;

    if (budget <= 100) {
        switch (season) {
            case "summer": moneySpend = budget * 0.3;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Camp - ${moneySpend.toFixed(2)}`);
                break;
            case "winter": moneySpend = budget * 0.7;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Hotel - ${moneySpend.toFixed(2)}`);
                break;
        }
    } else if (budget <= 1000) {
        switch (season) {
            case "summer": moneySpend = budget * 0.4;
                console.log(`Somewhere in Balkans`);
                console.log(`Camp - ${moneySpend.toFixed(2)}`);
                break;
            case "winter": moneySpend = budget * 0.8;
                console.log(`Somewhere in Balkans`);
                console.log(`Hotel - ${moneySpend.toFixed(2)}`);
                break;
        }
    } else {
        moneySpend = budget * 0.9;
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${moneySpend.toFixed(2)}`);

    }
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);

