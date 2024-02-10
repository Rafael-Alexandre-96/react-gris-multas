import api from './api';
import * as baseService from './baseService';

const path = '/motorista';

export const createMotorista = async (body) => {
  return baseService.createEntity(path, body);
};

export const updateMotorista = async (id, body) => {
  return baseService.updateEntity(path, id, body);
};

export const findByFiltro = async (value, showDeactive, page, field, asc) => {
  let data = null;
  await api.get(`/motorista/filtro?nome=${value}&showDeactive=${showDeactive}&page=${page}&inPage=10&sort=${field}&asc=${asc}`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const findAll = async () => {
  return baseService.findAll(path);
};

export const activeMotoristaById = async (id) => {
  return baseService.activeEntityById(path, id);
};

export const deactiveMotoristaById = async (id) => {
  return baseService.deactiveEntityById(path, id);
};