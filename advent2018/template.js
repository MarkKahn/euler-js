const fetch = require("./fetch-data");

module.exports = async function() {
  const rawData = await fetch(parseInt(/(\d+)\.js/.exec(__filename)[1]));

  const data = rawData.map(n => n);

  return [];
};
