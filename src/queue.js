const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.end = null;
    this.length = 0;
  }
  getUnderlyingList() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.head;
  }

  enqueue(value) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    const node = new Node(value);
    if (this.head) {
      this.end.next = node;
      this.end = node;
    } else {
      this.head = node;
      this.end = node;
    }
    this.length += 1;
  }

  dequeue() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.head) {
      return null;
    }
    let value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.end = null;
    }
    this.length -= 1;
    return value;
  }
}

module.exports = {
  Queue,
};
