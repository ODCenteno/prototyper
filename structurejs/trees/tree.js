class Node {
  constructor(value) {
    this.value = value;
    this.rightNode = null;
    this.leftNode = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currendNode = this.root;
      while(true) {
        if (newNode.value < currendNode.value) {
          if (!currendNode.leftNode) {
            currendNode.leftNode = newNode;
            return this;
          }
          currendNode = currendNode.leftNode;
        } else {
          if (!currendNode.rightNode) {
            currendNode.rightNode = newNode;
            return this;
          }
          currendNode = currendNode.rightNode;
        }
      }
    }
  }

  searchNode(item) {
    let currentNode = this.root;

    if (currentNode === null) {
      return 'empty tree';
    }

    while (true) {
      if (item === currentNode.value) {
        return currentNode;
      } else {
        if (item < currentNode.value && currentNode.leftNode) {
          currentNode = currentNode.leftNode;
        } else if (item > currentNode.value && currentNode.rightNode) {
          currentNode = currentNode.rightNode;
        } else {
          return 'Node not found';
        }
      }
    }
  }
}

const newTree = new BinaryTree();
newTree.insertNode(10);
newTree.insertNode(2);
newTree.insertNode(70);
newTree.insertNode(8);
newTree.insertNode(50);
newTree.insertNode(170);
newTree.insertNode(240);
newTree.insertNode(25);
