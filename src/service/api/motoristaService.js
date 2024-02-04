import api from '../api';

export const createMotorista = async (body) => {
    let data = null;
    await api.post(`/motorista`, body)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const updateMotorista = async (id, body) => {
    let data = null;
    await api.put(`/motorista/${id}`, body)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const findByFiltro = async (value, showDeactive, page, field, asc) => {
    let data = null;
    await api.get(`/motorista/filtro?nome=${value}&showDeactive=${showDeactive}&page=${page}&inPage=10&sort=${field}&asc=${asc}`)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const activeMotorista = async (id) => {
    let data = null;
    await api.patch(`/motorista/${id}/active`)
        .then((response) => data = response);
    return data;
}

export const deactiveMotorista = async (id) => {
    let data = null;
    await api.patch(`/motorista/${id}/deactive`)
        .then((response) => data = response);
    return data;
}