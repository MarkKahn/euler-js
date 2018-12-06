const rp = require("request-promise-native");
const tough = require("tough-cookie");
const fs = require("promise-fs");

const cookie = new tough.Cookie({
  key: "session",
  value: "53616c7465645f5f8477b193f3e27d0b239da2b13ec36f7ada30349149e20a79",
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
