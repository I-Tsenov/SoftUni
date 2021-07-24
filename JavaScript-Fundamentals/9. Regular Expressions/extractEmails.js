function extractEmails(text) {
    let pattern = /\s[a-z0-9][a-z0-9\.\-_]+[a-z]@[a-z][a-z\-]+(\.([a-z])+){1,}/g

    let match = pattern.exec(text);

    while (match !== null) {
        console.log(match[0])
        match = pattern.exec(text)
    }
}


extractEmails('Just send email to s.miller@mit.edu and J.hopking@york.ac.uk for more information.');

// /\w[\w\.\-_]+\w@\w[\w\-]+(\.\w+){1,}/g
// /\w[\w\.\-_]+\w@\w[\w\.\-]+\.\w+/g
// /\s[a-z0-9][a-z0-9\.\-_]+[a-z]@[a-z][a-z\-]+(\.([a-z])+){1,}/g