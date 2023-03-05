// Examples of how to represent graph structures with code

/*
  2 - 0
 / \
1 - 3
*/

// Edge list: lista de arrays
const edgeGraph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
]

// adjacent list: conexiones entre nodos por índice
//                     0       1       2         3
const adjacentGraph = [[2], [2, 3], [0, 1, 3], [1, 2]]

// Adjacent list: utilizando objetos con índices / hash Table
const objectAdjacentGraph = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
}


// Adjacent Matrix: Para grafos ponderados
  // Representación con arrays
const matrixArrayGraph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
]

  // representación con un objeto
const matrixObjectGraph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
}
