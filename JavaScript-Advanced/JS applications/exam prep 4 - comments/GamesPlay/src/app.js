import { logout } from "./api/api.js";
import { render, page } from "./lib.js"
import { getUserData } from "./util.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

const root = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);
setUserNav()

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);

page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const user = getUserData();

    if (user !== null) {
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