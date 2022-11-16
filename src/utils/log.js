const colors = require("../config/colors");

function log(color, message) {
  let now = Date.now();
  console.log(
    colors[color],
    `[${(new Date(now)).toISOString()}] - ${message}`
  );
}

module.exports = log;
