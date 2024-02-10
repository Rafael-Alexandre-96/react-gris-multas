import api from './api';
import * as baseService from './baseService';

const path = '/multa';

export const createMulta = async (body) => {
  return baseService.createEntity(path, body);
};

export const updateMulta = async (id, body) => {
  return baseService.updateEntity(path, id, body);
};

export const findByFiltro = async (page, field, asc) => {
  let data = null;
  await api.get(`/multa/filtro?page=${page}&inPage=10&sort=${field}&asc=${asc}`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const findById = async (id) => {
  return baseService.findById(path, id);
};

export const deleteMultaById = async (id) => {
  return baseService.deleteById(path, id);
};