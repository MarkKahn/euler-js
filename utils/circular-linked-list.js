const LinkedList = require('./linked-list');

module.exports = class CircularLinkedList extends LinkedList {
  constructor() {
    super();

    this.next = this;
    this.prev = this;
  }
};
