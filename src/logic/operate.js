import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '÷':
      return Big(numberOne).div(numberTwo).toString();
    case 'x':
      return Big(numberOne).times(numberTwo).toString();
      break;
    case '-':
      return Big(numberOne).minus(numberTwo).toString();
      break;
    case '+':
      return Big(numberOne).plus(numberTwo).toString();
      break;
    default:
  }
}

export default operate;