import { apiConfig } from './constants.js';

class MainApi {
  constructor(config) {
    this._url = config.url;
    this._movieUrl = config.yandexUrl;
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

  async getSavedMovies() {
    const response = await fetch(`${this._url}/movies`, {
      headers: this._headers,
      credentials: 'include',
    });
    return this._handleCorrectResponse(response);
  }

  async saveMovie(data) {
    const response = await fetch(`${this._url}/movies`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `${this._movieUrl}${data.image.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
      credentials: 'include',
    });
    return this._handleCorrectResponse(response);
  }

  async deleteMovie(data) {
    const response = await fetch(`${this._url}/movies/${data}`, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    });
    return this._handleCorrectResponse(response);
  }
}

export const mainApi = new MainApi(apiConfig);
