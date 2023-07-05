import sendRequest from "./send-request";
// const BASE_URL = '/api/items';
const BASE_URL = 'https://codeshop-api.onrender.com/api/items';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}