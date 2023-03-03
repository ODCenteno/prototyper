// const { default: next } = require("next");

// let node = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// }

class Nodo {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head

    this.length = 1;
  }

// Método que agrega un nuevo nodo al final de la lista
  appendNode(value) {
    const lastNode = new Nodo(value)
      this.tail.next = lastNode
      this.tail = lastNode;
      this.length++;
      return this;
  }

// Método que agrega un nodo al inicio de la lista
  prependNode(value) {
    const firstNode = new Nodo(value);
    firstNode.next = this.head;
    this.head = firstNode;
    this.length++;
    return this;
  }

  insertNode(value, index) {
    if(this.length === 1 ){
      this.appendNode(value);
      this.length++;
      return this;
    }

    let currentNode = this.head;

    while (index !== currentNode.value) {
      currentNode = currentNode.next !== null ? currentNode.next : this.appendNode(value);
    }

    const newNode = new Nodo(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++
    return this;
  }
}

let llone = new MySinglyLinkedList(1);
llone;
llone.appendNode(2);
