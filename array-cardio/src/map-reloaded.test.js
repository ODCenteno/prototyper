const { textSpanContainsPosition } = require('typescript');
const addNewAttr = require('./map-reloaded');

const try1 =
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

const result1 =
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
    taxes: 190
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
    taxes: 380
  }
]

describe('Test suite for map reloaded adding attributs to object\'s arrays', () => {
  test('should return ...[taxes: 190, 380]', () => {
    expect(addNewAttr(try1)).toStrictEqual(result1);
  });
})
