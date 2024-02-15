import api from './api';
import * as baseService from './baseService';

const path = '/motorista';

export const createMotorista = async (body) => {
  return baseService.createEntity(path, body);
};

export const updateMotorista = async (id, body) => {
  return baseService.updateEntity(path, id, body);
};

export const findByFieldPageable = async (field, value, showDeactive, page, sort, asc) => {
  let data = null;
  await api.get(`${path}/filtro/pageable?field=${field}&value=${value}&showDeactive=${showDeactive}&page=${page}&inPage=10&sort=${sort}&asc=${asc}`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const findAllActive = async () => {
  let data = null;
  await api.get(`${path}/filtro/all?showDeactive=false`)
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