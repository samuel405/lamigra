function calcTime(start) {
  let end = performance.now();
  console.log(`Script time: ${end - start} ms`);
  process.exit(0);
}

module.exports = calcTime;
