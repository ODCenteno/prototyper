const multiplyElements = require('./map-quizz');

describe('test suite for map() method in array cardio', () => {
  test('should return [4, 8, 10, 12, 16]', () => {
    const input = [2, 4, 5, 6, 8];
    expect(multiplyElements(input)).toStrictEqual([4, 8, 10, 12, 16]);
  });
  test('should return [1, 1, 4, 6]', () => {
    const input = [0.5, 0.5, 2, 3];
    expect(multiplyElements(input)).toStrictEqual([1, 1, 4, 6]);
  });
  test('should return []', () => {
    const input = [];
    expect(multiplyElements(input)).toStrictEqual([]);
  });
  test('Should return [0, 1, 4]', () => {
    const input = [0, 0.5, 2];
    expect(multiplyElements(input)).toStrictEqual([0, 1, 4]);
  });
});
