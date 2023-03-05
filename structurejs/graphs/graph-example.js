class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }

  addBorder(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const myGraph = new Graph();

myGraph.addVertex('1');
myGraph.addVertex('3');
myGraph.addVertex('5');
myGraph.addVertex('7');
myGraph.addVertex('9');

myGraph.addBorder('1', '3');
myGraph.addBorder('3', '5');
myGraph.addBorder('5', '7');
myGraph.addBorder('7', '3');
myGraph.addBorder('1', '9');
myGraph.addBorder('9', '5');
