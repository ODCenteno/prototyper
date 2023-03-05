class Nodo {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.before = null;
  }
}

class MyDoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      before: null,
    }
    this.tail = this.head;
    this.length = 1;
  }

  appendNode(value) {
    const newNode = new Nodo(value);
    newNode.before = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  prependNode(value) {
    const newNode = new Nodo(value);
    newNode.next = this.head;
    this.head.before = newNode;

    this.length++;
    return this;
  }

  insertNode(newValue, index) {
    if(this.length === 1 ){
      this.appendNode(newValue);
      return this;
    }

    let currentNode = this.head;
    let previousNode = null;


    while (index !== currentNode.value) {
      currentNode = currentNode.next !== null ? currentNode.next : this.appendNode(newValue);
    }

    console.log(currentNode);

    const newNode = new Nodo(newValue);
    previousNode = currentNode.before;

    newNode.next = currentNode;
    newNode.before = previousNode;

    previousNode.next = newNode;
    currentNode.before = newNode;
    this.length++;
    return this;
  }
}

let myDoubleList = new MyDoubleLinkedList(1);
myDoubleList.appendNode(2);
myDoubleList.appendNode(3);
myDoubleList.appendNode(4);
myDoubleList.insertNode(10, 3);
