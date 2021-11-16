function attachEvents() {

    const input = document.getElementById('location');
    document.getElementById('submit').addEventListener('click', getWeather);

    const weatherIcons = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
    }

    async function getWeather() {

        const cityName = input.value;
        input.value = '';

        try {
            const code = await getCode(cityName);

            const [current, upcoming] = await Promise.all([
                getCurrentWeather(code),
                getForecast(code)
            ])

            currentRender(current)
            forecastRender(upcoming)
        }
        catch (error) {
            document.getElementById('forecast').textContent = 'Error'
        }

    }

    function currentRender(current) {

        const currentDiv = document.getElementById('current');
        document.getElementById('forecast').style.display = 'block';
        const tempDiv = document.querySelector('.forecasts')
        
        if (tempDiv !== null) {
            tempDiv.remove();
        }

        const result =
            e('div', { className: 'forecasts' },
                [e('span', { classList: 'condition symbol' }, weatherIcons[current.forecast.condition]),
                e('span', { className: 'condition' },
                    [e('span', { className: 'forecast-data' }, current.name),
                    e('span', { className: 'forecast-data' }, `${current.forecast.low}\xB0/${current.forecast.high}\xB0`),    //  '\xBO е знак за градуси'
                    e('span', { className: 'forecast-data' }, current.forecast.condition)])]);

        return currentDiv.appendChild(result)
    }

    function forecastRender(upcoming) {

        const upcomingDiv = document.getElementById('upcoming');
        document.getElementById('forecast').style.display = 'block';
        const tempDiv = document.querySelector('.forecast-info')
        
        if (tempDiv !== null) {
            tempDiv.remove();
        }

        const result =
            e('div', { className: 'forecast-info' },
                [e('span', { className: 'upcoming' },
                    [e('span', { className: 'symbol' }, weatherIcons[upcoming.forecast[0].condition]),
                    e('span', { className: 'forecast-data' }, `${upcoming.forecast[0].low}\xB0/${upcoming.forecast[0].high}\xB0`),
                    e('span', { className: 'forecast-data' }, upcoming.forecast[0].condition)]),
                e('span', { className: 'upcoming' },
                    [e('span', { className: 'symbol' }, weatherIcons[upcoming.forecast[1].condition]),
                    e('span', { className: 'forecast-data' }, `${upcoming.forecast[1].low}\xB0/${upcoming.forecast[1].high}\xB0`),
                    e('span', { className: 'forecast-data' }, upcoming.forecast[1].condition)]),
                e('span', { className: 'upcoming' },
                    [e('span', { className: 'symbol' }, weatherIcons[upcoming.forecast[2].condition]),
                    e('span', { className: 'forecast-data' }, `${upcoming.forecast[2].low}\xB0/${upcoming.forecast[2].high}\xB0`),
                    e('span', { className: 'forecast-data' }, upcoming.forecast[2].condition)])])

        return upcomingDiv.appendChild(result)
    }

    async function getCode(cityName) {
        const url = `http://localhost:3030/jsonstore/forecaster/locations`;
        const response = await fetch(url);
        const data = await response.json();

        return data.find(c => c.name.toLowerCase() === cityName.toLowerCase()).code;
    }

    async function getCurrentWeather(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/today/` + code;
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }

    async function getForecast(code) {

        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/` + code;
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }

    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }

}

attachEvents();