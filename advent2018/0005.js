const fetch = require("./fetch-data");

module.exports = async function() {
  const rawData = await fetch(5);

  let data = rawData[0].trim();
  const rx = /aA|Aa|bB|Bb|cC|Cc|dD|Dd|eE|Ee|fF|Ff|gG|Gg|hH|Hh|iI|Ii|jJ|Jj|kK|Kk|lL|Ll|mM|Mm|nN|Nn|oO|Oo|pP|Pp|qQ|Qq|rR|Rr|sS|Ss|tT|Tt|uU|Uu|vV|Vv|wW|Ww|xX|Xx|yY|Yy|zZ|Zz/g;

  while (rx.test(data)) {
    data = data.replace(rx, "");
  }
  const dataLen = data.length;

  let shortest = 1000000;

  for (let i = 0; i < 26; i++) {
    let shortenedData = data.replace(new RegExp(String.fromCharCode(65 + i), "ig"), "");
    while (rx.test(shortenedData)) {
      shortenedData = shortenedData.replace(rx, "");
    }
    if (shortenedData.length < shortest) {
      shortest = shortenedData.length;
    }
  }

  return [dataLen, shortest];
};
