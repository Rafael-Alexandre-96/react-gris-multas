import api from './api';
import * as baseService from './baseService';

const path = '/veiculo';

export const createVeiculo = async (body) => {
  return baseService.createEntity(path, body);
};

export const updateVeiculo = async (id, body) => {
  return baseService.updateEntity(path, id, body);
};

export const findByFieldPageable = async (field, value, showDeactive, page, sort, asc) => {
  let data = null;
  await api.get(`${path}/filtro/pageable?field=${field}&value=${value}&showDeactive=${showDeactive}&page=${page}&inPage=10&sort=${sort}&asc=${asc}`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const findAll = async () => {
  return baseService.findAll(path);
};

export const findAllTracaoActive = async () => {
  let data = null;
  await api.get(`${path}/filtro/all?field=tipoRodado&value=TRACAO&showDeactive=false`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const findAllReboqueActive = async () => {
  let data = null;
  await api.get(`${path}/filtro/all?field=tipoRodado&value=REBOQUE&showDeactive=false`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const activeVeiculoById = async (id) => {
  return baseService.activeEntityById(path, id);
};

export const deactiveVeiculoById = async (id) => {
  return baseService.deactiveEntityById(path, id);
};