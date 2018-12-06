const fetch = require("./fetch-data");

module.exports = async function() {
  const rawData = await fetch(1);

  const data = rawData.map(n => n);

  return [];
};
