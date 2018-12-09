const fetch = require('./fetch-data');

module.exports = async function() {
  const numPlayers = 447;
  const lastMarbleValue = 7151000;
  const marbles = [0, 2, 1];
  const players = new Array(numPlayers);
  let marbleIndex = 1;
  players.fill(0);

  for (let i = 3; i <= lastMarbleValue; i++) {
    if (!(i % 10000)) console.log(i);
    if (i % 23) {
      marbleIndex += 2;
      if (marbleIndex > marbles.length) marbleIndex -= marbles.length;
      marbles.splice(marbleIndex, 0, i);
    } else {
      let removeIndex = marbleIndex - 7;
      if (removeIndex < 0) removeIndex += marbles.length;
      players[i % numPlayers] += i + marbles[removeIndex];
      marbles.splice(removeIndex, 1);
      marbleIndex = removeIndex;
    }
  }

  return Math.max(...players);
};
