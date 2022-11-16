let start = performance.now();
const fs = require('fs');

const { COLLECTIONS_DATA, CONFIG_FILE } = require("./constants");

const exportData = require("./export-data");
const createCollections = require("./create-collections");
const importCollections = require("./import-collections");
const calcTime = require("./utils/calc-time");

const log = require("./utils/log");
const generateConfigFile = require('./commands/generate-config-file');
const generateCollectionBatchData = require('./commands/create-collection');

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
    log('yellow', 'Export data');
    exportData();
    calcTime(start);
    break;
  case 2:
    createCollections();
    calcTime(start);
    break;
  case 3:
    log('yellow', 'Import collections');
    importCollections(COLLECTIONS_DATA).then((data) => {
      console.log(data);
      calcTime(start);
    }).catch(err => {
      console.log(err);
    });
    break;
  case 4:
    log('yellow', 'Full migrate');
    exportData();
    createCollections();
    importCollections(COLLECTIONS_DATA).then((data) => {
      console.log(data);
      calcTime(start);
    }).catch(err => {
      console.log(err);
    });
    break;
  case 5:
    // @todo listar os nomes dos arquivos expotados para
    // abstrair os dados das collections

    let collNames = process.argv[3].split(',') || null;

    if (collNames) {
      generateConfigFile(collNames);
    }

    break;
  case 6:
    let configs = require('../collections-config.json');
    generateCollectionBatchData(configs[0]);
    break;
  default:
    console.log(opt);
}
