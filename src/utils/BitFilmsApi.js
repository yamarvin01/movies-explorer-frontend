import { transformBitFilmsToMovies } from "./utils";

class BitFilmsApi {

  getBitFilms() {
    return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => transformBitFilmsToMovies(res));
  }

}

export const bitFilmsApi = new BitFilmsApi();
