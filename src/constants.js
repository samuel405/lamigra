const dotenv = require('dotenv');
dotenv.config();

const MYSQL_HOST = String(process.env.MYSQL_HOST) || 'localhost';
const MYSQL_PORT = Number(process.env.MYSQL_PORT) || 3306;
const MYSQL_USER = String(process.env.MYSQL_USER) || '';
const MYSQL_PASS = String(process.env.MYSQL_PASS) || '';
const MYSQL_DB = String(process.env.MYSQL_DB) || '';
const MONGO_URL = String(process.env.MONGO_URL) || '';

const COLL_PATH = './src/data/collections';
const REL_COLL_PATH = './data/collections';
const RAW_PATH = './src/data/raw';

const CONFIG_FILE = './collections-config.json';

const COLLECTIONS_DATA = [
  {
    name: 'films',
    path: './data/collections/films.json'
  },
  {
    name: 'tv_shows',
    path: './data/collections/tv_shows.json'
  },
  {
    name: 'users',
    path: './data/collections/users.json'
  },
];

module.exports = {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_DB,
  MONGO_URL,
  COLL_PATH,
  REL_COLL_PATH,
  RAW_PATH,
  COLLECTIONS_DATA,
  CONFIG_FILE
};
