function deleteByEmail() {

    const input = document.querySelector('input[name="email"]');
    const collection = document.querySelectorAll('#customers>tbody>tr');
    const output = document.getElementById('result');

    for (const row of collection) {
        let email = row.children[1].textContent
        if (email === input.value) {
            row.remove()
            output.textContent = 'Deleted'
        } else {
            output.textContent = 'Not found.'
        }
    }
}