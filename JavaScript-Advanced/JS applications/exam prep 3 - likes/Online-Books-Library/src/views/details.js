import { html } from "../lib.js"
import { getBookById, deleteBook, addLike, getBookLikes, getMyBookLikes } from "../api/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, isOwner, onDelete, likes, showLikeButton, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">

            ${isOwner ? html`
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : null}

            ${showLikeButton ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>` : null}

            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`

export async function detailsPage(ctx) {

    const user = getUserData();

    const [book, likes, hasLike] = await Promise.all([
        getBookById(ctx.params.id),
        getBookLikes(ctx.params.id),
        user ? getMyBookLikes(ctx.params.id, user.id) : 0
    ]);

    const isOwner = user && user.id === book._ownerId;
    const showLikeButton = user !== null && isOwner === false && hasLike === 0;

    ctx.render(detailsTemplate(book, isOwner, onDelete, likes, showLikeButton, onLike))

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete the following book: ${book.title}`);
        if (confirmed) {
            await deleteBook(book._id);
            ctx.page.redirect('/');
        }
    }

    async function onLike() {
        await addLike(ctx.params.id);
        ctx.page.redirect(`/details/${book._id}`);
    }
}