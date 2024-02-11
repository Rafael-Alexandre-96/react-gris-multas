import api from './api';
import * as baseService from './baseService';

const path = '/enquadramento';

export const createEnquadramento = async (body) => {
  body = {...body, valor: body.valor.toString().replace(',', '.') };
  return baseService.createEntity(path, body);
};

export const updateEnquadramento = async (id, body) => {
  body = {...body, valor: body.valor.toString().replace(',', '.') };
  return baseService.updateEntity(path, id, body);
};

export const findByFiltro = async (value, page, field, asc) => {
  let data = null;
  await api.get(`${path}/filtro?descricao=${value}&page=${page}&inPage=10&sort=${field}&asc=${asc}`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const findAll = async () => {
  return baseService.findAll(path);
};

export const deleteEnquadramentoById = async (id) => {
  return baseService.deleteById(path, id);
};