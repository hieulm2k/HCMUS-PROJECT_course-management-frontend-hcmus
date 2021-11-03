import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

export const get = async (endpoint, options = {}) => {
  return await axios.get(`${BASE_URL}/${endpoint}`, options)
    .catch(error => _handleHttpError(error));
}

export const post = async (endpoint, data = {}, options = {}) => {
  return await axios.post(`${BASE_URL}/${endpoint}`, data, options)
    .catch(error => _handleHttpError(error));
}

export const _handleHttpError = error => {
  const { statusCode } = error.response.data;

  if (statusCode !== 401) {
    throw error;
  }
}
