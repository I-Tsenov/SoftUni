import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyMemes } from "../api/data.js";

const profileTemplate = (user, memes) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
        <div class="user-content">
            <p>Username: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${memes.length > 0 ? memes.map(memeTemplate) : html`<p class="no-memes">No memes in database.</p>`}
    </div>
</section>`

const memeTemplate = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>`

export async function profilePage(ctx) {

    const user = {
        name: sessionStorage.getItem('userName'),
        email: sessionStorage.getItem('email'),
        gender: sessionStorage.getItem('userGender'),
        id: sessionStorage.getItem('userId')
    }

    const myMemes = await getMyMemes(user.id)

    ctx.render(profileTemplate(user, myMemes))
}