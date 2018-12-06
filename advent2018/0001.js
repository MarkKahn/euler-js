const fetch = require("./fetch-data");

module.exports = async function() {
  const rawData = await fetch(1);

  const data = rawData.map(n => +n);
  const total = data.reduce((a, b) => a + b, 0);

  let firstDupe = null;
  const values = new Set();
  let value = 0;

  outer: while (1) {
    for (let i = 0, l = data.length; i < l; i++) {
      value += data[i];
      if (values.has(value)) {
        firstDupe = value;
        break outer;
      }

      values.add(value);
    }
  }

  return [total, firstDupe];
};
