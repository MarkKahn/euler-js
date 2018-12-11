const rp = require("request-promise-native");
const tough = require("tough-cookie");
const fs = require("promise-fs");
const cookie = require("../advent-cookie");

const cookie = new tough.Cookie({
  key: "session",
  value: cookie,
  domain: "adventofcode.com",
  maxAge: 60 * 60 * 24 * 365,
});
const cookieJar = rp.jar();
cookieJar.setCookie(cookie, "https://adventofcode.com");

async function fileExists(fileName) {
  try {
    const stat = await fs.stat(fileName);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = function(dayNum) {
  const fileName = `${__dirname}/../resources/advent2018/${dayNum}.txt`;

  return new Promise(async (resolve, reject) => {
    const exists = await fileExists(fileName);

    if (exists) {
      const data = await fs.readFile(fileName);
      resolve(data.toString().split("\n"));
    } else {
      return rp({
        uri: `https://adventofcode.com/2018/day/${dayNum}/input`,
        jar: cookieJar,
      })
        .then(body => body.trim())
        .then(body => {
          fs.writeFile(fileName, body);
          return body.split("\n");
        })
        .then(resolve);
    }
  });
};
