
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
        let filt = source.filter(item => item[aggr.key] === data[config.key]);

        if (aggr.exclude) {
          aggr.exclude.forEach(key => {
            filt.forEach((item, i) => {
              delete filt[i][key];
            });
          })
        }

        filt.forEach((item, i) => {
          Object.keys(item).forEach(key => {
              item[`${aggrPrefix}_${key}`] = filt[i][key];
              delete filt[i][key];
          });
        })

        console.log(filt);
        switch (Number(aggr.layer)) {
          case 0:
            data = Object.assign(data, filt[0]);
            break;
        }
      })
      console.log(data);
    }
    batchData.push(data);
  });
  console.log(raw);
}

module.exports = generateCollectionBatchData;
