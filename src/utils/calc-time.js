const log = require("./log");

function calcTime(start) {
  let end = performance.now();
  log('green', `Script time: ${end - start} ms`);
  process.exit(0);
}

module.exports = calcTime;
