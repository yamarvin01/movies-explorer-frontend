class MainApi {
  constructor(options) {
    this._options = options;
    this._baseUrl = this._options.baseUrl;
    this._token = this._options.token;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  _request(url, options) {
    return fetch(url, options)
      .then(this._checkResponse);
  }

  getSavedMovies(token) {
    return this._request(this._baseUrl + '/movies', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  createMovie(movie, token) {
    return this._request(this._baseUrl + '/movies', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
  }

  deleteMovie(id, token) {
    return this._request(this._baseUrl + `/movies/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getUserInfo(token) {
    return this._request(this._baseUrl + "/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  editUserInfo(user, token) {
    return this._request(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

}

export const mainApi = new MainApi({
  baseUrl: "https://api.movie.yamarvin01.nomoredomains.work",
  token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2ZhMWNjOWEzNWJmNGRhOTc0ODJlOGEiLCJpYXQiOjE2NzkxNjQxMTIsImV4cCI6MTY3OTc2ODkxMn0.6UC7oa5flD7Xk4ILqGI2ivmHXc1-jECvzazEPcnEYro"
});
