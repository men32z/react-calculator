import calculate from '../logic/calculate';

const obj = {
  total: '0',
  next: '0',
  operation: null,
};

test('test calculate add operator', () => {
  obj.next = '15';
  expect(calculate(obj, '+')).toEqual({ total: '15', next: '', operation: '+' });
});

test('test calculate make a sum', () => {
  obj.total = '0';
  obj.next = '15';
  const obj2 = calculate(obj, '+');
  expect(obj2).toEqual({ total: '15', next: '', operation: '+' });
  obj2.next = '15';
  expect(calculate(obj2, '=')).toEqual({ total: '0', next: '30', operation: null });
});

test('test calculate +/- operator', () => {
  obj.next = '15';
  expect(calculate(obj, '+/-')).toEqual({ total: '0', next: '-15', operation: null });
});

test('test calculate AC operator', () => {
  obj.total = '15';
  obj.next = '15';
  obj.operation = '+';
  expect(calculate(obj, 'AC')).toEqual({ total: '0', next: '0', operation: null });
});

test('test calculate . operator', () => {
  obj.total = '15';
  obj.next = '';
  obj.operation = null;
  expect(calculate(obj, '.')).toEqual({ total: '15', next: '0.', operation: null });
  obj.next = '15';
  expect(calculate(obj, '.')).toEqual({ total: '15', next: '15.', operation: null });
  expect(calculate(obj, '.')).toEqual({ total: '15', next: '15.', operation: null });
});
