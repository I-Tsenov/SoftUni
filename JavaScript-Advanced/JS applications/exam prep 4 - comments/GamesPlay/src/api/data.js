import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllGames() {
    return await api.get('/data/games?sortBy=_createdOn%20desc&distinct=category')
}

export async function getCatalogGames() {
    return await api.get('/data/games?sortBy=_createdOn%20desc')
}

export async function createGame(data) {
    return await api.post('/data/games', data)
}

export async function editGame(id, data) {
    return await api.put('/data/games/' + id, data)
}

export async function getGameById(id) {
    return await api.get('/data/games/' + id)
}

export async function deleteGame(id) {
    return await api.del('/data/games/' + id)
}

export async function getCommentsByGame (gameId) {
    return await api.get(`/data/comments?where=gameId%3D%22${gameId}%22`)
}

export async function createComment (gameId, comment) {
    return await api.post('/data/comments', {gameId, comment})
}