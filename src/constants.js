const dotenv = require('dotenv');
dotenv.config();

const MYSQL_HOST = String(process.env.MYSQL_HOST) || 'localhost';
const MYSQL_PORT = Number(process.env.MYSQL_PORT) || 3306;
const MYSQL_USER = String(process.env.MYSQL_USER) || '';
const MYSQL_PASS = String(process.env.MYSQL_PASS) || '';
const MYSQL_DB = String(process.env.MYSQL_DB) || '';
const MONGO_URL = String(process.env.MONGO_URL) || '';

const COLLECTIONS = [
  'films',
  'tv_shows',
  'users'
];

module.exports = {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_DB,
  MONGO_URL,
  COLLECTIONS
};
