import api from './api';

export const createVeiculo = async (body) => {
    let data = null;
    await api.post(`/veiculo`, body)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const updateVeiculo = async (id, body) => {
    let data = null;
    await api.put(`/veiculo/${id}`, body)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const findByFiltro = async (value, showDeactive, page, field, asc) => {
    let data = null;
    await api.get(`/veiculo/filtro?placa=${value}&showDeactive=${showDeactive}&page=${page}&inPage=10&sort=${field}&asc=${asc}`)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const findAll = async () => {
    let data = null;
    await api.get(`/veiculo`)
        .then((response) => data = response)
        .catch((error) => { throw error });
    return data;
};

export const activeVeiculo = async (id) => {
    let data = null;
    await api.patch(`/veiculo/${id}/active`)
        .then((response) => data = response);
    return data;
}

export const deactiveVeiculo = async (id) => {
    let data = null;
    await api.patch(`/veiculo/${id}/deactive`)
        .then((response) => data = response);
    return data;
}