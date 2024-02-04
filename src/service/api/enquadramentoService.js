import api from '../api';

export const createEnquadramento = async (body) => {
    let data = null;
    await api.post(`/enquadramento`, body)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const updateEnquadramento = async (id, body) => {
    let data = null;
    await api.put(`/enquadramento/${id}`, body)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

/*export const findByFiltro = async (page, field, asc) => {
    let data = null;
    await api.get(`/enquadramento/filtro?page=${page}&inPage=10&sort=${field}&asc=${asc}`)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};*/

export const findAll = async () => {
    let data = null;
    await api.get(`/enquadramento`)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const deleteEnquadramento = async (id) => {
    let data = null;
    await api.delete(`/enquadramento/${id}`)
        .then((response) => data = response);
    return data;
}