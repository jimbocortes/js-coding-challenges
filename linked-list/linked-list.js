const assert = require("assert");
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);

    let current = this.head;
    if (current === null) {
      this.head = node;
    } else {
      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index > this.size) {
      return false;
    } else {
      const node = new Node(element);
      let cur, prev;
      cur = this.head;

      // head must be handled differently because it is not a node
      // there's no next
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        cur = this.head;
        let i = 0;
        while (i < index) {
          prev = cur;
          // careful when handling next in cur, coz it might be the last one
          cur = cur.next; // once it's null, the loop should already be stopped.
          i++;
        }

        prev.next = node;
        node.next = cur;
      }

      this.size++;
    }
  }
}

// insert 1
const l = new LinkedList();

l.insertAt("jimbo", 0);
assert.deepStrictEqual(l.size, 1);
l.insertAt("hello", 1);
assert.deepStrictEqual(l.size, 2);
l.insertAt("cortes", 0);
assert.deepStrictEqual(l.size, 3);
