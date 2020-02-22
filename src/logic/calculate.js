import operate from './operate';

const calculate = (calculator, buttonName) => {
  const operators = ['÷', '+', '-', 'x'];

  switch (buttonName) {
    case 'AC':

      break;
    case '+/-':

      break;
    case '%':

      break;
    case '=':

      break;
    default:

  }
  if (operators.includes(buttonName)) {
    operate()
  }
}

export default calculate;