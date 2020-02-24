import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '÷':
      return Big(numberOne).div(numberTwo).toString();
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
