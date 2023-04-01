// Функция переводит милисекунды в "часы, минуты"
export function minutesToHourMinutes(minutes) {
  let h = Math.floor(minutes / 60);
  let m = Math.floor(minutes % 60);
  return `${h}ч${m}м`;
}

// Функции преобразует массив данных BitFilms в Movies
export function transformBitFilmsToMovies(bitFilms) {
  return bitFilms.map((bitFilm) => {
    return {
      country: bitFilm.country,
      director: bitFilm.director,
      duration: bitFilm.duration,
      year: bitFilm.year,
      description: bitFilm.description,
      image: "https://api.nomoreparties.co" + bitFilm.image.url,
      trailerLink: bitFilm.trailerLink,
      thumbnail: "https://api.nomoreparties.co" + bitFilm.image.formats.thumbnail.url,
      movieId: bitFilm.id,
      nameRU: bitFilm.nameRU,
      nameEN: bitFilm.nameEN,
    };
  });
}
