CREATE DATABASE streaming;

USE streaming;

CREATE TABLE studios (
  id INT PRIMARY KEY AUTO_INCREMENT AUTO_INCREMENT,
  name INT NOT NULL
);

CREATE TABLE films (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  year INT NOT NULL,
  language VARCHAR(255) NOT NULL,
  sinopse INT NOT NULL,
  fk_studio INT
);

ALTER TABLE
  films
ADD
  FOREIGN KEY(fk_studio) REFERENCES studios(id);

CREATE TABLE actors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE tv_shows (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  sinopse VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  dt_time_created DATE NOT NULL,
  auth_hash VARCHAR(255) NOT NULL,
  UNIQUE (auth_hash)
);

CREATE TABLE episodes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  season INT NOT NULL,
  sinopse VARCHAR(255) NOT NULL,
  fk_tv_show INT
);

ALTER TABLE
  episodes
ADD
  FOREIGN KEY(fk_tv_show) REFERENCES tv_shows (id);

CREATE TABLE film_actors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fk_film INT,
  fk_actors INT
);

ALTER TABLE
  film_actors
ADD
  FOREIGN KEY(fk_film) REFERENCES films (id);

ALTER TABLE
  film_actors
ADD
  FOREIGN KEY(fk_actors) REFERENCES actors (id);

CREATE TABLE tv_shows_actors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fk_tv_show INT,
  fk_actors INT
);

ALTER TABLE
  tv_shows_actors
ADD
  FOREIGN KEY(fk_tv_show) REFERENCES tv_shows (id);

ALTER TABLE
  tv_shows_actors
ADD
  FOREIGN KEY(fk_actors) REFERENCES actors (id);

CREATE TABLE films_list (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fk_film INT,
  fk_user INT,
  evaluation INT
);

ALTER TABLE
  films_list
ADD
  FOREIGN KEY(fk_film) REFERENCES films (id);

ALTER TABLE
  films_list
ADD
  FOREIGN KEY(fk_user) REFERENCES users (id);

CREATE TABLE tv_shows_list (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fk_show INT,
  fk_user INT
);

ALTER TABLE
  tv_shows_list
ADD
  FOREIGN KEY(fk_show) REFERENCES tv_shows (id);

ALTER TABLE
  tv_shows_list
ADD
  FOREIGN KEY(fk_user) REFERENCES users (id);