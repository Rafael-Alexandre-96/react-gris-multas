import api from './api';

export const createMulta = async (body) => {
    let data = null;
    await api.post(`/multa`, body)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const updateMulta = async (id, body) => {
    let data = null;
    await api.put(`/multa/${id}`, body)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const findByFiltro = async (page, field, asc) => {
    let data = null;
    await api.get(`/multa/filtro?page=${page}&inPage=10&sort=${field}&asc=${asc}`)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const findById = async (id) => {
    let data = null;
    await api.get(`/multa/${id}`)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const deleteMulta = async (id) => {
    let data = null;
    await api.delete(`/multa/${id}`)
        .then((response) => data = response);
    return data;
}