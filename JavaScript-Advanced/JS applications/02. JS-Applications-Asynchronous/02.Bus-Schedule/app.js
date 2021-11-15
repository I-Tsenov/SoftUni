function solve() {

    const info = document.getElementById('info');
    const arriveBtn = document.getElementById('arrive');
    const departBtn = document.getElementById('depart');
    let stop = {
        next : 'depot'
    }

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/` + stop.next;
        const response = await fetch(url);
        const data = await response.json();

        info.textContent = `Next stop ${data.name}`;
        stop = data;

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    async function arrive() {

        info.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();