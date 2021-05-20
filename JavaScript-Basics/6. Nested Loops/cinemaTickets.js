function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    index++
    let soldTickets = 0;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (command !== "Finish") {
        let movie = command;
        let freeSpace = Number(input[index])
        index++;

        soldTickets = 0;

        let type = input[index];
        index++;

        while (type !== "End") {

            totalTickets++;
            soldTickets++;

            switch (type) {
                case "standard": standardTickets++; break;
                case "student": studentTickets++; break;
                case "kid": kidTickets++; break;
            }

            if (soldTickets >= freeSpace) {
                break;
            }

            type = input[index];
            index++;

        }

        let theatreFull = soldTickets / freeSpace * 100;

        console.log(`${movie} - ${theatreFull.toFixed(2)}% full.`)

        command = input[index];
        index++;
    }

    let studentTicketsShare = studentTickets / totalTickets * 100;
    let standardTicketsShare = standardTickets / totalTickets * 100;
    let kidTicketsShare = kidTickets / totalTickets * 100;


    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentTicketsShare.toFixed(2)}% student tickets.`)
    console.log(`${standardTicketsShare.toFixed(2)}% standard tickets.`)
    console.log(`${kidTicketsShare.toFixed(2)}% kids tickets.`)

}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
/* cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "kid", "kid", "kid", "kid", "standard", "End",
    "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]) */