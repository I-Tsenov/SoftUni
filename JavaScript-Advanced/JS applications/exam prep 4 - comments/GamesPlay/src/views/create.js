import { html } from "../lib.js";
import { createGame } from "../api/data.js";

const createTemplate = (onSubmit) => html`
<section id="create-page" class="auth">
    <form @submit=${onSubmit} id="create">
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>     
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>`
                                                                        // textArea ? дали ще се хвaне от fromEntries
export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = Object.fromEntries(new FormData(ev.target));

        if (Object.values(formData).some(e => e === '')) {
            alert('All fields required!')
            throw new Error('All fields required')
        }

        await createGame(formData);
        ctx.page.redirect('/')
    }
}