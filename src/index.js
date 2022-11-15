let start = performance.now();

const { MONGO_DB } = require('./constants');
const mongoConn = require('./connection/mongo');

const filmsColl = require('./data/collections/films.json');
const tvShowsColl = require('./data/collections/tv_shows.json');
const usersColl = require('./data/collections/users.json');

async function migrate() {
  await mongoConn.connect();
  const db = mongoConn.db(MONGO_DB);

  const films = db.collection('films');
  const tvShows = db.collection('tv_shows');
  const users = db.collection('users');

  let data = [];
  try {
    data['films'] = await films.insertMany(filmsColl);
    data['tv_shows'] = await tvShows.insertMany(tvShowsColl);
    data['users'] = await users.insertMany(usersColl);
  } catch(err) {
    throw err;
  }
  return data;
}

migrate().then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
}).finally(() => {
  mongoConn.close();
  let end = performance.now();
  console.log(`Script time: ${end - start} ms`)
});
