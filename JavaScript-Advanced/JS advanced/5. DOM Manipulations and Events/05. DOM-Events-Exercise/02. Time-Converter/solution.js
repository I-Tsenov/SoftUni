function attachEventsListeners() {

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    Array.from(document.querySelectorAll('[value="Convert"]')).forEach(btn => btn.addEventListener('click', (ev) => {
        if (ev.target.parentNode.querySelector('#days')) {
            hours.value = days.value * 24;
            minutes.value = hours.value * 60;
            seconds.value = minutes.value * 60;
        } else if (ev.target.parentNode.querySelector('#hours')) {
            days.value = hours.value / 24;
            minutes.value = hours.value * 60;
            seconds.value = minutes.value * 60;
        } else if (ev.target.parentNode.querySelector('#minutes')) {
            seconds.value = minutes.value * 60;
            hours.value = minutes.value / 60;
            days.value = hours.value / 24;
        } else if (ev.target.parentNode.querySelector('#seconds')) {
            minutes.value = seconds.value / 60;
            hours.value = minutes.value / 60;
            days.value = hours.value / 24;
        }
    }))
}