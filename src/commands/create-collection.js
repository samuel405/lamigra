const fs = require('fs');

// @todo criar função que abstrai a criação de uma collection
function generateCollectionBatchData(config) {
  let rawPath = '../data/raw/';
  let raw = require(rawPath + config.source);
  let batchData = [];

  raw.forEach(data => {
    if (config.aggregate) {
      config.aggregate.forEach(aggr => {
        let aggrPrefix = aggr.prefix;
        let source = require(rawPath + aggr.source);
        let key0 = aggr.key0;
        let filt = source.filter(item => item[key0] === data[config.key]);
        let layer = aggr.layer;

        if (aggr.exclude && layer < 1) {
          aggr.exclude.forEach(key => {
            filt.forEach((item, i) => {
              delete filt[i][key];
            });
          })
        }

        if (layer < 1) {
          filt.forEach((item, i) => {
            Object.keys(item).forEach(key => {
              item[`${aggrPrefix}_${key}`] = filt[i][key];
              delete filt[i][key];
            });
          });
        }

        if (layer == 1) {
          aggr.aggregate.forEach(agg2 => {
            // let agg2Prefix = complex1.prefix;
            let agg2Source = require(rawPath + agg2.source);
            let key1 = aggr.key1;
            let key2 = agg2.key2;
            let agg2Filt = agg2Source.filter(item => item[key2] == aggr[key1])
            console.log([
              key0,
              key1,
              key2
            ])
            console.log(agg2Filt);
          });
        }

        switch (Number(aggr.layer)) {
          case 0:
            data = Object.assign(data, filt[0]);
            break;
        }
      });
      console.log(data);
    }

    if (config.exclude) {
      config.exclude.forEach(key => {
        delete data[key];
      });
    }

    batchData.push(data);
  });

  fs.writeFile(`./src/data/test/users.json`, JSON.stringify(batchData), (err) => {
    if (err) throw err;
    console.log('Collection saved!');
  });
  // console.log(raw);
}

module.exports = generateCollectionBatchData;
