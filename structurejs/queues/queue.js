class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return "empty queue";
    }

    const firstItem = this.first;

    this.first = firstItem.next;
    this.length--;
    return this;
  }

  front() {
    if (this.length === 0) {
      return "empty queue";
    }
    return this.first;
  }
}

const myQueue = new Queue;
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
