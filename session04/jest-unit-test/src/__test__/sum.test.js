//const sum = require('./sum');
import {sum} from '../sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(4);
  expect(sum(3, 2)).toBe(5);
});