const allJoinData = `
  SELECT
    actors.*,
    episodes.*,
    film_actors.*,
    films.*,
    films_list.*,
    studios.*,
    tv_shows.*,
    tv_shows_actors.*,
    tv_shows_list.*,
    users.*
  FROM
    actors actors,
    episodes episodes,
    film_actors film_actors,
    films films,
    films_list films_list,
    studios studios,
    tv_shows tv_shows,
    tv_shows_actors tv_shows_actors,
    tv_shows_list tv_shows_list,
    users users
  WHERE 
    actors.id = episodes.id
    AND film_actors.fk_actors = actors.id
    AND actors.id = films.id
    AND actors.id = films_list.id
    AND actors.id = studios.id
    AND actors.id = tv_shows.id
    AND tv_shows_actors.fk_actors = actors.id
    AND actors.id = tv_shows_list.id
    AND actors.id = users.id
`;