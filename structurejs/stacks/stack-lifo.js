class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LiFoStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if(this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.items.length == 0)
    return "Underflow";

    const lastItem = this.top;
    this.top = lastItem.next;
    this.length--;
    return lastItem;
  }
}

const myStack = new LiFoStack()
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();

