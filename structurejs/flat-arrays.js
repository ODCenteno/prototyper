const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const rta = matriz.flat(3);
console.log('flat', rta);


// 3 nested arrays
let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// reducing nesting by flattening the array to depth 2
let flattenArray = numbers.flat(2);

// new flatten array
console.log(flattenArray);

// Output:
// [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
