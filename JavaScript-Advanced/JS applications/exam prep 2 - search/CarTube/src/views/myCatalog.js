import { html } from "../../node_modules/lit-html/lit-html.js"
import { getMyOffers } from "../api/data.js"

const myCatalogTemplate = (offers) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        ${offers.length === 0 ? html`<p class="no-cars"> You haven't listed any cars yet.</p>` :
        offers.map(offerTemplate)}
    </div>
</section>`

const offerTemplate = (car) => html`
<div class="listing">
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>
`

export async function myCatalogPage(ctx) {

    const userId = localStorage.getItem('userId')
    const offers = await getMyOffers(userId)
    ctx.render(myCatalogTemplate(offers))
}