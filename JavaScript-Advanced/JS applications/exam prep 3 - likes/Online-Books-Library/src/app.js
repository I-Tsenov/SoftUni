import { logout } from "./api/api.js";
import { render, page } from "./lib.js"
import { getUserData } from "./util.js";

import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { detailsPage } from "./views/details.js";
import { createPage } from "./views/create.js";
import { editPage } from "./views/edit.js";
import { myLibraryPage } from "./views/myLibrary.js";

const root = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);
setUserNav()

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/myLibrary', myLibraryPage);

page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const user = getUserData();

    if (user !== null) {
        document.querySelector('#user span').textContent = `Welcome, ${user.email}`;
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'block';
    } else {
        document.getElementById('guest').style.display = 'block';
        document.getElementById('user').style.display = 'none';
    }
}

async function onLogout() {
    await logout();
    setUserNav();
    page.redirect('/');
}