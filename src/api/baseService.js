import api from './api';

export const createEntity = async (path, body) => {
  let data = null;
  await api.post(path, body)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const updateEntity = async (path, id, body) => {
  let data = null;
  await api.put(`${path}/${id}`, body)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const findAll = async (path) => {
  let data = null;
  await api.get(path)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const findById = async (path, id) => {
  let data = null;
  await api.get(`${path}/${id}`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const deleteById = async (path, id) => {
  let data = null;
  await api.delete(`${path}/${id}`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const activeEntityById = async (path, id) => {
  let data = null;
  await api.patch(`${path}/${id}/active`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};

export const deactiveEntityById = async (path, id) => {
  let data = null;
  await api.patch(`${path}/${id}/deactive`)
    .then((response) => data = response)
    .catch((error) => { throw error });
  return data;
};