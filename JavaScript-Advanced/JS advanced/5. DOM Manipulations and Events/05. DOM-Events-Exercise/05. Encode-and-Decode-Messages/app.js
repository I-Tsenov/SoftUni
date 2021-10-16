function encodeAndDecodeMessages() {
    const message = document.querySelector('textarea');
    const outputTextArea = document.querySelector('[placeholder="No messages..."]');

    document.getElementById('main').addEventListener('click', (ev) => {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Encode and send it') {
            outputTextArea.value = encode(message.value);
            message.value = '';
        } else if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Decode and read it') {
            outputTextArea.value = decode(outputTextArea.value);
        }
    });

    function encode(message) {
        let encodedMessage = Array.from(message).map(c => String.fromCharCode(c.charCodeAt() + 1));
        return encodedMessage.join('');
    }

    function decode(codedMessage) {
        let decodedMessage = Array.from(codedMessage).map(c => String.fromCharCode(c.charCodeAt() - 1));
        return decodedMessage.join('');
    }
}