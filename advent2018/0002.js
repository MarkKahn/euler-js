const fetch = require("./fetch-data");
const string = require("../utils/strings");

module.exports = async function() {
  const rawData = await fetch(2);

  const data = rawData.map(n => n);

  // PART 1
  let [num2, num3] = [0, 0];
  data.forEach(word => {
    const letterCounts = string.countLetters(word);
    let [has2, has3] = [false, false];

    Object.values(letterCounts).forEach(val => {
      if (val === 2) has2++;
      if (val === 3) has3++;
    });

    if (has2) num2++;
    if (has3) num3++;
  });
  const checksum = num2 * num3;

  // PART 2
  let common = "";
  outer: for (let i = 0, l = data.length; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (string.difference(data[i], data[j]) === 1) {
        common = string.common(data[i], data[j]);
      }
    }
  }

  return [checksum, common];
};
