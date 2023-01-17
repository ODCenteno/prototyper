// let arr = [ 1, 2, 15 ];

// // the method reorders the content of arr
// arr.sort();

// console.log( arr );

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

console.log(arr);  // 1, 2, 15

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log( a + " <> " + b );
  return a - b;
});

let names = 'Bilbo, Gandalf, Nazgul';

let namers = names.split(', ');

for (let name of namers) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
