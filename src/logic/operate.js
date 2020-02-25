/* eslint-disable-next-line */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '÷':
      try {
        return Big(numberOne).div(Big(numberTwo)).toString();
      } catch (e) {
        return e.message === '[big.js] Division by zero' ? 'Cannot divide by zero' : 'unknown error';
      }
    case 'x':
      return Big(numberOne).times(numberTwo).toString();
    case '-':
      return Big(numberOne).minus(numberTwo).toString();
    case '+':
      return Big(numberOne).plus(numberTwo).toString();
    case '%':
      return Big(numberOne).mod(numberTwo).toString();
    default:
      return '0';
  }
};

export default operate;
