//setup views
//setup nav links
//show appropriate navigation based on user session
//start application in default view -> home

import { setupHome } from './views/home.js';
import { setupLogin } from './views/login.js';
import { setupRegister } from './views/register.js';
import { setupDashboard } from './views/dashboard.js';
import { setupCreate } from './views/create.js';
import { setupDetails } from './views/details.js';
import { api } from './api/data.js';


const main = document.querySelector('main');
const nav = document.querySelector('nav');

const views = {};
const links = {};
const navigation = {
    goTo,
    setUserNav
};

// we prepare all the views and links into corresponting objects ({views}, {links})
registerView('home', document.getElementById('home-page'), setupHome, 'homeLink');
registerView('login', document.getElementById('login-page'), setupLogin, 'loginLink');
registerView('register', document.getElementById('register-page'), setupRegister, 'registerLink');
registerView('dashboard', document.getElementById('dashboard-holder'), setupDashboard, 'dashboardLink');
registerView('create', document.getElementById('create-page'), setupCreate, 'createLink');
registerView('details', document.getElementById('details-page'), setupDetails);
document.getElementById('views').remove();


setupNavigation();

//start application in home view
goTo('home');
//setup logout event listener
document.getElementById('logoutBtn').addEventListener('click', onLogout)

function registerView(name, section, setup, linkId) {
    const view = setup(section, navigation);   // view = SHOW function which returns section/view
    views[name] = view;                        // we save the function in VIEWS OBJ with corresponding key name 
    if (linkId) {
        links[linkId] = name;                   // we save that name as value to corresponding linkId which help the navigation between pages
    }
}

async function goTo(name, ...params) {          // ensures visualization of the current view when called by the navigation
    main.innerHTML = '';
    const view = views[name];
    const section = await view(...params);      // it calls the corresponding SHOW function from the VIEWS OBJ which returns the page we need and appends it
    main.appendChild(section);
}

function setupNavigation() {                    //shows appropriate buttons (guest/user) and listens for navigation clicks / calls the goTO function
    setUserNav();

    nav.addEventListener('click', (ev) => {
        const viewName = links[ev.target.id];
        if (viewName) {
            ev.preventDefault();
            goTo(viewName);
        }
    })
}

function setUserNav() {

    const token = sessionStorage.getItem('userToken');

    if (token !== null) {
        [...nav.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'list-item');
        [...nav.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'list-item');
    }
}

async function onLogout(ev) {
    ev.preventDefault();
    await api.logout();
    setUserNav();
    goTo('home');
}