import operate from '../logic/operate';

test('return a sum of two given numbers given the + operator', () => {
  expect(operate('15', '15', '+')).toBe('30');
});

test('return the diff of two given numbers given the - operator', () => {
  expect(operate('15', '15', '-')).toBe('0');
});

test('return a multiplication of two given numbers given the x operator', () => {
  expect(operate('5', '5', 'x')).toBe('25');
});

test('return a division of two given numbers given the ÷ operator', () => {
  expect(operate('15', '15', '÷')).toBe('1');
});

test('return error message given a division by zero', () => {
  expect(operate('15', '0', '÷')).toBe('Cannot divide by zero');
});

test('return a division of two given numbers given the % operator', () => {
  expect(operate('15', '15', '%')).toBe('0');
});
