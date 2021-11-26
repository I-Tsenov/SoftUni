import createApi from './api.js';

export const api = createApi();

export async function getIdeas() {
    return await api.get('data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc')
}

export async function getIdeaById(id) {
    return await api.get('data/ideas/' + id)
}

export async function createIdea(idea) {
    return await api.post('data/ideas', idea);
}
export async function deleteIdeaById(id) {
    return await api.delete('data/ideas/' + id)
}