import { apiConfig } from './constants.js';

class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _handleCorrectResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  async getMe() {
    const response = await fetch(`${this._url}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    });
    return this._handleCorrectResponse(response);
  }

  async updateUser({ name, email }) {
    const response = await fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name,
        email,
      }),
      credentials: 'include',
    });
    return this._handleCorrectResponse(response);
  }
}

export const mainApi = new MainApi(apiConfig);
