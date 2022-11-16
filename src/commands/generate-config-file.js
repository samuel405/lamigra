const { REL_COLL_PATH, CONFIG_FILE } = require('../constants');
const fs = require('fs');
const log = require("../utils/log");

function generateConfigFile(collNames) {
  log('yellow', 'Generate config file');

  if (!collNames) {
    log('red', 'collNames type error');
    return;
  }

  let config = [];
  collNames.forEach(name => {
    let fileName = name + '.json';
    config.push({
      source: fileName,
      aggregate: [
        {
          layer: 0,
          source: '',
          exclude: [],
          include: []
        }
      ],
      path: `${REL_COLL_PATH}/${fileName}`
    });
  });

  fs.writeFile(CONFIG_FILE, JSON.stringify(config), (err) => {
    if (err) throw err;
    log('green', 'Config file created!');
  });
}

module.exports = generateConfigFile;
