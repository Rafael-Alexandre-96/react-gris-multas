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

export const findByFieldPageable = async (field, value, page, sort, asc) => {
  let data = null;
  await api.get(`${path}/filtro/pageable?field=${field}&value=${value}&page=${page}&inPage=10&sort=${sort}&asc=${asc}`)
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