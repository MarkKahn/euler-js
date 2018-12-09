const CircularLinkedList = require('../utils/circular-linked-list');

class Marble extends CircularLinkedList {
  constructor(value) {
    super();

    this.value = value;
  }
}

function playMarbleMania(numPlayers, lastMarbleValue) {
  const players = new Uint32Array(numPlayers);
  let marble = new Marble(0);
  players.fill(0);

  for (let i = 1; i <= lastMarbleValue; i++) {
    if (i % 23) {
      const newMarble = new Marble(i);
      marble = marble.next.insert(newMarble).next;
    } else {
      const marbleToRemove = marble.prev.prev.prev.prev.prev.prev.prev;
      marble = marbleToRemove.next;
      marbleToRemove.remove();
      players[i % numPlayers] += i + marbleToRemove.value;
    }
  }

  return Math.max(...players);
}

module.exports = async function() {
  const numPlayers = 447;
  const lastMarbleValue = 71510;

  return [playMarbleMania(numPlayers, lastMarbleValue), playMarbleMania(numPlayers, lastMarbleValue * 100)];
};
