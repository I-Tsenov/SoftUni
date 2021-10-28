function tickets(arr, sortFactor) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = []

    for (const ticket of arr) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);

        tickets.push(new Ticket(destination, price, status))
    }

    tickets.sort((a, b) => {
        switch (sortFactor) {
            case 'destination': return a.destination.localeCompare(b.destination);
            case 'price': return a.price - b.price;
            case 'status': return a.status.localeCompare(b.status);
        }
    })

    return tickets;
}



console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
))