import * as api from './api.js'

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getOffers() {
    return await api.get(host + '/data/cars?sortBy=_createdOn%20desc');
}

export async function getOfferById(id) {
    return await api.get(host + '/data/cars/' + id)
}

export async function deleteOffer(id) {
    return await api.del(host + '/data/cars/' + id)
}

export async function createOffer(data) {
    return await api.post(host + '/data/cars', data)
}

export async function editOffer(id, data) {
    return await api.put(host + '/data/cars/' + id, data)
}

export async function getMyOffers(userId) {
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getOffersByYear(query) {
    return await api.get(host + `/data/cars?where=year%3D${query}`)
}