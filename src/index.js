let start = performance.now();

const { COLLECTIONS_DATA } = require("./constants");

const exportData = require("./export-data");
const createCollections = require("./create-collections");
const importCollections = require("./import-collections");
const calcTime = require("./utils/calc-time");

/**
 * 1 - export data
 * 2 - create collections
 * 3 - import collections
 * 4 - full migrate process
 */

let opt = Number(process.argv[2]) ?? null;

if (!opt) {
  throw 'Invalid command option!';
}

switch(opt) {
  case 1:
    exportData();
    calcTime(start);
    break;
  case 2:
    createCollections();
    calcTime(start);
    break;
  case 3:
    console.log('Import collections');
    importCollections(COLLECTIONS_DATA).then((data) => {
      console.log(data);
      calcTime(start);
    }).catch(err => {
      console.log(err);
    });
    break;
  case 4:
    console.log('Full migrate');
    exportData();
    createCollections();
    importCollections(COLLECTIONS_DATA).then((data) => {
      console.log(data);
      calcTime(start);
    }).catch(err => {
      console.log(err);
    });
    break;
  default:
    console.log(opt);
}
