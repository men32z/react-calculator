import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const operators = ['÷', '+', '-', 'x', '%'];

  if (operators.includes(buttonName)) {
    return { total, next, operation: buttonName };
  }

  switch (buttonName) {
    case 'AC':
      return { total: '0', next: '0', operation: null };
    case '+/-':
      return {
        total: (total * -1).toString(),
        next: (next * -1).toString(),
        operation,
      };
    case '=':
      return {
        total: operate(total, next, operation),
        next: '0',
        operation: null,
      };
    default:
      return { total, next, operation };
  }
};

export default calculate;
