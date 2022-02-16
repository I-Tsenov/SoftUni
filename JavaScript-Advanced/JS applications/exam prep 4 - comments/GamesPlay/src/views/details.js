import { html } from "../lib.js";
import { getGameById, deleteGame, createComment, getCommentsByGame } from "../api/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (game, onDelete, isOwner, isGuest, comments, onComment) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <div class="details-comments">
            <h2>Comments:</h2>

               ${comments.length === 0 
                ? html`<p class="no-comment">No comments.</p>`
                : html`<ul>${comments.map(commentTemplate)}</ul>`}

        </div>

        ${isOwner ? html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>` : null}

    </div>

    ${isGuest === false && isOwner === false ? html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onComment} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>` : null}

</section>`

const commentTemplate = (c) => html`
<li class="comment">
    <p>${c.comment}</p>
</li>`

export async function detailsPage(ctx) {

    const user =  getUserData();
    let isGuest = true

    if (user !== null) {
        isGuest = false;
    }

    const [game, comments] = await Promise.all([
        getGameById(ctx.params.id),
        getCommentsByGame(ctx.params.id)
    ])
    
    const isOwner = user && user.id === game._ownerId;

    ctx.render(detailsTemplate(game, onDelete, isOwner, isGuest, comments, onComment))

    async function onDelete() {

        const confirmed = confirm(`Are you sure you want to delete the following game: ${game.title}`);
        if (confirmed) {
            await deleteGame(ctx.params.id);
            ctx.page.redirect('/');
        }
    }

    async function onComment (ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const comment = formData.get('comment').trim();
        const gameId = game._id;

        try {

            // if (isOwner === true) {
            //     alert('The author can\'t comment his own game!');
            //     ev.target.reset();
            //     throw new Error ('The author can\'t comment his own game!');
            // }

            if (comment === '') {
                alert('Please, make sure the field is not empty!');
                throw new Error ('Please, make sure the field is not empty!');
            }
    
            await createComment(gameId, comment);
            ev.target.reset();
            ctx.page.redirect(`/details/${gameId}`);
        }
        catch (err) {
            alert(err.message)
        }
    }
}