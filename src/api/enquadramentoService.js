import * as baseService from './baseService';

const path = '/enquadramento';

export const createEnquadramento = async (body) => {
  return baseService.createEntity(path, body);
};

export const updateEnquadramento = async (id, body) => {
  return baseService.updateEntity(path, id, body);
};

export const findAll = async () => {
  return baseService.findAll(path);
};

export const deleteEnquadramentoById = async (id) => {
  return baseService.deleteById(path, id);
};