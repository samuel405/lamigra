
const fs = require('fs');

let actors = require('../data/raw/actors.json');
let episodes = require('../data/raw/episodes.json');
let film_actors = require('../data/raw/film_actors.json');
let films_list = require('../data/raw/films_list.json');
let films = require('../data/raw/films.json');
let studios = require('../data/raw/studios.json');
let tv_shows_actors = require('../data/raw/tv_shows_actors.json');
let tv_shows_list = require('../data/raw/tv_shows_list.json');
let tv_shows = require('../data/raw/tv_shows.json');
let users = require('../data/raw/users.json');



function load() {
  let filmsColl = [];

  films.films.map(film => {
    film['studio'] = studios.studios.find(item => item.id === film.fk_studio).name;
    film['actors'] = [];

    let filmsAc = [];
    filmsAc = film_actors.film_actors.filter(item => item.fk_film === film.id);

    filmsAc.map(_filmAc => {
      film['actors'].push(actors.actors.find(item => item.id === _filmAc.fk_actors).name);
    });

    delete film.id;
    delete film.fk_studio;
    filmsColl.push(film);
  });

  fs.writeFile('../data/collections/films.json', JSON.stringify(filmsColl), (err) => {
    if (err) throw err;
    console.log('film saved!');
  });

  console.log('----------------------------------');
  console.log('--        Films Collection      --');
  console.log('----------------------------------');
  console.log(filmsColl);
  console.log('----------------------------------');

  delete filmsColl;

  let userColl = [];
  users.users.map(user => {
    user['films_list'] = [];
    let filmsList = [];
    filmsList = films_list.films_list.filter(item => item.fk_user === user.id);

    for (let i = 0; i <= filmsList.length; i++) {
      if (!filmsList[i]) {
        continue;
      }
      user['films_list'].push(filmsList[i]);
    }

    user['tv_shows_list'] = [];
    let tvShowsList = [];
    tvShowsList = tv_shows_list.tv_shows_list.filter(item => item.fk_user === user.id);

    for (let i = 0; i <= tvShowsList.length; i++) {
      if (!tvShowsList[i]) {
        continue;
      }
      user['tv_shows_list'].push(tvShowsList[i]);
    }

    userColl.push(user);
  });

  fs.writeFile('../data/collections/users.json', JSON.stringify(userColl), (err) => {
    if (err) throw err;
    console.log('user saved!');
  });

  console.log('----------------------------------');
  console.log('--        User Collection       --');
  console.log('----------------------------------');
  console.log(JSON.stringify(userColl));
  console.log('----------------------------------');

  delete userColl;

  let tvShowsCol = [];
  tv_shows.tv_shows.map(tvShow => {
    tvShow['actors'] = tv_shows_actors.tv_shows_actors.filter(item => item.id === tvShow.id);
    tvShow['episodes'] = episodes.episodes.filter(item => item.id === tvShow.id);

    tvShowsCol.push(tvShow);
  });

  fs.writeFile(`../data/collections/tv_shows.json`, JSON.stringify(tvShowsCol), (err) => {
    if (err) throw err;
    console.log('tv_show saved!');
  });

  console.log('----------------------------------');
  console.log('--        TV_SHOW Collection     --');
  console.log('----------------------------------');
  console.log(JSON.stringify(tvShowsCol));
  console.log('----------------------------------');

  delete tvShowsCol;
}

load();

module.exports = load;
