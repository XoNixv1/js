"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из последних просмотреных фильмов?',''),
      rateFilm  = prompt('На сколько оцените его?', ''),
      lastFilm1 = prompt('Один из последних просмотреных фильмов?',''),
      rateFilm1 = prompt('На сколько оцените его?', '');


personalMovieDB.movies[lastFilm] = rateFilm;
personalMovieDB.movies[lastFilm1] = rateFilm1;

console.log(personalMovieDB);
