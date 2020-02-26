import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operators = ['÷', '+', '-', 'x', '%'];

  if (operators.includes(buttonName)) {
    return { total: next, next: '', operation: buttonName };
  }

  if (numbers.includes(buttonName)) {
    return { total, next: ((next && next.match(/[a-z]/i) ? '' : next) || '') + buttonName, operation };
  }

  switch (buttonName) {
    case 'AC':
      return { total: '0', next: '0', operation: null };
    case '.':
      return {
        total,
        next: next.split('').includes('.') ? next : `${(next || 0).toString()}.`,
        operation,
      };
    case '+/-':
      return {
        total: (total * -1).toString(),
        next: (next * -1).toString(),
        operation,
      };
    case '=':
      return {
        total: '0',
        next: operate(total, next, operation),
        operation: null,
      };
    default:
      return { total, next, operation };
  }
};

export default calculate;
