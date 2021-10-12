function attachGradientEvents() {
    const output = document.getElementById('result');
    document.getElementById('gradient').addEventListener('mousemove', onMouseMove);

    function onMouseMove(event) {
        const offsetX = event.offsetX           //event.pageX - event.target.offsetLeft;   алтернативно
        const resultPercentage = Math.floor(offsetX / event.target.clientWidth * 100)
        output.textContent = `${resultPercentage}%`
    }
}