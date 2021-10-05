function generateReport() {

    let report = [];
    let checkedIndexes = [];
    const output = document.getElementById('output');
    const headers = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const tableRows = Array.from(document.querySelectorAll('tbody>tr'));

    headers.forEach((header, index) => {
        if (header.checked === true) {
            checkedIndexes.push(index);
        }
    })

    tableRows.forEach((row) => {

        let dataObject = {};

        checkedIndexes.forEach((indexElement) => {
            dataObject[headers[indexElement].name] = row.children[indexElement].textContent;
        })
        
        report.push(dataObject)
    })

    output.textContent = JSON.stringify(report)
}