/* eslint-disable-next-line */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  try {
    switch (operation) {
      case '÷':
        return Big(numberOne).div(Big(numberTwo)).toString();
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
  } catch (e) {
    return e.message === '[big.js] Division by zero' ? 'Cannot divide by zero' : 'unknown error';
  }
};

export default operate;
