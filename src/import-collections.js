const { MONGO_DB } = require('./constants');
const mongoConn = require('./connection/mongo');

async function importCollections(collections) {

  await mongoConn.connect();
  const db = mongoConn.db(MONGO_DB);

  let result = [];

  try {
    for (let i = 0; i < collections.length; i++) {
      let path = collections[i].path;
      let name = collections[i].name;
      let data = require(path);
      if (data) {
        let coll = db.collection(name);
        result[name] = await coll.insertMany(data);
      }
    }
    mongoConn.close();
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = importCollections;
