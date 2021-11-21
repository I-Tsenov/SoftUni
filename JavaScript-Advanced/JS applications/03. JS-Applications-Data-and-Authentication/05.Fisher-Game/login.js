document.getElementById('loginForm').addEventListener('submit', login)
document.getElementById('registerForm').addEventListener('submit', register)

async function login(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    const email = formData.get('email')
    const password = formData.get('password')

    if (email === '' || password === '') {
        alert('Incorrect user or password, please try again!');
        throw new Error('Incorrect user or password, please try again!');
    }

    const response = await fetch('http://localhost:3030/users/login/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })

    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json()
    const authToken = data.accessToken;;
    const userId = data._id;


    sessionStorage.setItem('authToken', authToken);
    sessionStorage.setItem('userId', userId);
    ev.target.reset();
    location.replace('index.html');
}

async function register(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('rePass');

    if (email === '' || password === '') {
        alert('All fields must be filled');
        throw new Error('All fields must be filled');
    }
    if (password !== repass) {
        alert('passwords must match');
        throw new Error('passwords must match');
    }

    const response = await fetch('http://localhost:3030/users/register/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })

    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json()
    const authToken = data.accessToken;
    const userId = data._id;

    sessionStorage.setItem('authToken', authToken);
    sessionStorage.setItem('userId', userId);

    ev.target.reset();
    location.replace('index.html');
}



