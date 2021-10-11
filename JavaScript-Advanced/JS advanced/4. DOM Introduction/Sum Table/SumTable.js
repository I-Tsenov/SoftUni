function sumTable() {
    let sum = 0;
    const rows = document.querySelectorAll('table tr')

    for (let i = 1; i < rows.length - 1; i++) {
        const cols = rows[i].lastElementChild;
        sum += Number(cols.textContent);
    }

    document.getElementById('sum').textContent = sum;

}