async function getInfo() {

    const busId = document.getElementById('stopId');
    const stop = document.getElementById('stopName');
    const listBuses = document.getElementById('buses');
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + busId.value;
    busId.value = '';

    try {
        listBuses.innerHTML = '';
        const response = await fetch(url);
        const data = await response.json();

        stop.textContent = data.name;

        Object.entries(data.buses)
            .map(([bus, time]) => e('li', `Bus ${bus} arrives in ${time}`))
            .forEach(b => listBuses.appendChild(b))
    }

    catch (error) {
        stop.textContent = 'Error'
    }

    function e(type, content) {
        let element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}
