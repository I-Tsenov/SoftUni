function attachEvents() {

    document.getElementById('submit').addEventListener('click', async () => {

        const author = document.getElementById('author').value;
        const content = document.getElementById('content').value;

        await sendMessage({ author, content })

        document.getElementById('author').value = '';
        document.getElementById('content').value = '';

        getChat();
    })
    
    document.getElementById('refresh').addEventListener('click', getChat)

    getChat();
}

attachEvents();

async function sendMessage(message) {

    const url = 'http://localhost:3030/jsonstore/messenger'

    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message)
    });

}

async function getChat() {

    const url = 'http://localhost:3030/jsonstore/messenger'
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('messages').value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n')
}
