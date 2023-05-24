import { apiConfig } from './constants.js';
const BASE_URL = apiConfig.url;

function handleCorrectResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
}

export const signin = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/signin`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      password: password,
      email: email,
    }),
    credentials: 'include',
  });
  return handleCorrectResponse(response);
};

export const signup = async ({ name, email, password }) => {
  const response = await fetch(`${BASE_URL}/signup`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      name: name,
      password: password,
      email: email,
    }),
    credentials: 'include',
  });
  return handleCorrectResponse(response);
};

export const signout = async () => {
  const response = await fetch(`${BASE_URL}/signout`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({}),
    credentials: 'include',
  });
  return handleCorrectResponse(response);
};

export const checkAuth = async () => {
  const response = await fetch(`${BASE_URL}/check`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
    credentials: 'include',
  });
  return handleCorrectResponse(response);
};
