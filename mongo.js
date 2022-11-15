const { MONGO_URL, MONGO_DB } = require('./constants');
const { MongoClient } = require('mongodb');

const mongoConn = (new MongoClient(MONGO_URL)).db(MONGO_DB);

module.exports = mongoConn;

// // Database Name
// const dbName = 'streaming';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   const films = await db.collection("films");

//   // films.insertOne({name: "Indiana Jones"});

//   console.log(films.find({}));

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());