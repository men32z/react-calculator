import calculate from '../logic/calculate';

const obj = {
  total: '0',
  next: '0',
  operation: null,
};

test('test calculate add operator', () => {
  obj.total = '15';
  expect(calculate(obj, '+')).toEqual({ total: '15', next: '0', operation: '+' });
});

test('test calculate make a sum', () => {
  obj.total = '15';
  const obj2 = calculate(obj, '+');
  expect(obj2).toEqual({ total: '15', next: '0', operation: '+' });
  obj2.next = '15';
  expect(calculate(obj2, '=')).toEqual({ total: '30', next: '0', operation: null });
});

test('test calculate +/- operator', () => {
  obj.total = '15';
  expect(calculate(obj, '+/-')).toEqual({ total: '-15', next: '0', operation: null });
});

test('test calculate AC operator', () => {
  obj.total = '15';
  obj.next = '15';
  obj.operation = '+';
  expect(calculate(obj, 'AC')).toEqual({ total: '0', next: '0', operation: null });
});
