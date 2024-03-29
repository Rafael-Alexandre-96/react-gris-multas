import api from './api';
import * as baseService from './baseService';

const path = '/multa';

export const createMulta = async (body) => {
  return baseService.createEntity(path, body);
};

export const updateMulta = async (id, body) => {
  return baseService.updateEntity(path, id, body);
};

export const findByFieldPageable = async (field, value, page, sort, asc) => {
  let data = null;
  await api.get(`${path}/filtro/pageable?field=${field}&value=${value}&page=${page}&inPage=10&sort=${sort}&asc=${asc}`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const findAguardandoAssinatura = async (field, value, page, sort, asc) => {
  let data = null;
  await api.get(`${path}/aguardando-assinatura?field=${field}&value=${value}&page=${page}&inPage=10&sort=${sort}&asc=${asc}`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const motoristasAguardandoAssinatura = async () => {
  let data = null;
  await api.get(`${path}/resumo-motorista`)
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