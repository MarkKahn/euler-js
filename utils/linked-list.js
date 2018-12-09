module.exports = class LinkedList {
  insert(node) {
    node.next = this.next;
    node.prev = this;
    this.next.prev = node;
    this.next = node;

    return this;
  }

  insertBefore(node) {
    node.insert(this);

    return this;
  }

  remove() {
    this.next.prev = this.prev;
    this.prev.next = this.next;

    this.next = this.prev = null;
  }
};
