import {rest} from '../rest';

test('subt 2 - 1 to equal 1', () => {
  expect(rest(2, 1)).toBe(1);
  expect(rest(2, 2)).toBe(0);
  expect(rest(3, 1)).toBe(2);
});