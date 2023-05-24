import { apiConfig } from './constants.js';

class MoviesApi {
  constructor(config) {
    this._url = config.yandexUrl;
    this._headers = config.headers;
  }

  _handleCorrectResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  async getMovies() {
    const response = await fetch(`${this._url}`, {
      headers: this._headers,
    });
    return this._handleCorrectResponse(response);
  }
}

export const moviesApi = new MoviesApi(apiConfig);
