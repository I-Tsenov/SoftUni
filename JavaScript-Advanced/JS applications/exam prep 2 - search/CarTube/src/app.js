import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout as apiLogout } from './api/data.js';
import { catalogPage } from "./views/catalog.js";
import { detailsPage } from "./views/details.js";
import { createPage } from "./views/create.js";
import { editPage } from "./views/edit.js";
import { myCatalogPage } from "./views/myCatalog.js";
import { searchByYearPage } from "./views/search.js";

const main = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/catalog', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/myCatalog', decorateContext, myCatalogPage);
page('/search', decorateContext, searchByYearPage);

page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);  // using partial application
    ctx.setUserNav = setUserNav;                      // on register and login needs to be updated
    next();
}

function setUserNav() {
    let username = localStorage.getItem('username')

    if (username !== null) {
        document.querySelector('#profile > a').textContent = `Welcome ${username}`
        document.getElementById('profile').style.display = '';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = '';
    }
}

async function logout() {
    await apiLogout();

    setUserNav();
    page.redirect('/')
};