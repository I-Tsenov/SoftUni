import { getIdeas } from '../api/data.js'
import { e } from '../dom.js'

function createIdeaPreview(idea) {
    const element = e('div', { className: "card overflow-hidden current-card details" });
    element.style.width = `20rem`;
    element.style.height = `18rem`;
    element.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a id = "${idea._id}" class="btn" href="">Details</a>`;

    return element;
}

export function setupDashboard(section, navigation) {
    
    section.addEventListener('click', ev => {
        if (ev.target.classList.contains('btn')) {
            ev.preventDefault();
            const ideaId = ev.target.id;
            navigation.goTo('details', ideaId);
        }
    })

    return showDashboard;

    async function showDashboard() {
        section.innerHTML = '';
        const ideas = await getIdeas();

        if (ideas.length == 0) {
            section.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>'
        } else {
            ideas.map(createIdeaPreview).forEach(idea => section.appendChild(idea));
        }

        return section;
    }
}


/*

<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">Best Pilates Workouts to Do at Home</p>
    </div>
    <img class="card-image" src="./images/best-pilates-youtube-workouts-2__medium_4x3.jpg"
        alt="Card image cap">
    <a class="btn" href="">Details</a>
</div>

<h1>No ideas yet! Be the first one :)</h1>
*/