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
  if (response.status === 400) {
    return Promise.reject('Error 400 - Не передано одно из полей!');
  }
  if (response.status === 401) {
    return Promise.reject(
      'Error 401 - Пользователь с данным email не найден или пароль введен не верно!'
    );
  }
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
  if (response.status === 400) {
    return Promise.reject('Error 400 - Некорректно заполнено одно из полей!');
  }
  return handleCorrectResponse(response);
};

export const checkAuth = async () => {
  const response = await fetch(`${BASE_URL}/check`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
    credentials: 'include',
  });
  if (response.status === 400) {
    return Promise.reject(
      'Error 400 - Токен не передан или передан не в том формате!'
    );
  }
  if (response.status === 401) {
    return Promise.reject('Error 401 - Переданный токен некорректен!');
  }
  return handleCorrectResponse(response);
};

export const signout = async () => {
  const response = await fetch(`${BASE_URL}/signout`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({}),
    credentials: 'include',
  });
  if (response.status === 400) {
    return Promise.reject(
      'Error 400 - Токен не передан или передан не в том формате!'
    );
  }
  if (response.status === 401) {
    return Promise.reject('Error 401 - Переданный токен некорректен!');
  }
  return handleCorrectResponse(response);
};
