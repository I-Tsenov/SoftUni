import { getIdeaById, deleteIdeaById } from '../api/data.js';
import { e } from '../dom.js';

function createIdeaCard(idea, isOwner, navigation) {
    const result = document.createDocumentFragment()
    const image = e('img', { className: "det-img", src: idea.img });
    const divDesc = e('div', { className: "desc" },
        e('h2', { className: "display-5" }, idea.title),
        e('p', { className: "infoType" }, 'Description'),
        e('p', { className: "idea-description" }, idea.description));
    const delBtn = e('div', { className: "text-center" }, e('a', { className: "btn detb", href: "", onClick: onDelete }, "Delete"));

    result.appendChild(image);
    result.appendChild(divDesc);

    if (isOwner) {
        result.appendChild(delBtn);
    }

    async function onDelete(ev) {
        ev.preventDefault();
        const confirmed = confirm("Are you sure you want to delete your idea?");
        if (confirmed) {
            await deleteIdeaById(idea._id)
            navigation.goTo('dashboard')
        }
    }

    return result;
}

export function setupDetails(section, navigation) {

    return showDetails;

    async function showDetails(id) {
        section.innerHTML = '';

        const idea = await getIdeaById(id);
        const userId = sessionStorage.getItem('userId');

        const card = createIdeaCard(idea, userId === idea._ownerId, navigation);
        section.appendChild(card)

        return section;
    }
}