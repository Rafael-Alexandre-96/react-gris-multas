import api from './api';
import * as baseService from './baseService';

const path = '/veiculo';

export const createVeiculo = async (body) => {
  return baseService.createEntity(path, body);
};

export const updateVeiculo = async (id, body) => {
  return baseService.updateEntity(path, id, body);
};

export const findByFiltro = async (value, showDeactive, page, field, asc) => {
  let data = null;
  await api.get(`${path}/filtro?placa=${value}&showDeactive=${showDeactive}&page=${page}&inPage=10&sort=${field}&asc=${asc}`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const findAll = async () => {
  return baseService.findAll(path);
};

export const activeVeiculoById = async (id) => {
  return baseService.activeEntityById(path, id);
};

export const deactiveVeiculoById = async (id) => {
  return baseService.deactiveEntityById(path, id);
};