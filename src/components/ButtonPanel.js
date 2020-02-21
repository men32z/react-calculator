import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const group1 = ['AC', '+/-', '%', '+'].map(x => <Button key={x} name={x} />);
  const group2 = ['7', '8', '9', 'X'].map(x => <Button key={x} name={x} />);
  const group3 = ['4', '5', '6', '-'].map(x => <Button key={x} name={x} />);
  const group4 = ['1', '2', '3', '+'].map(x => <Button key={x} name={x} />);
  const group5 = ['0', '.', '='].map(x => <Button key={x} name={x} />);

  return (
    <div>
      <div>{group1}</div>
      <div>{group2}</div>
      <div>{group3}</div>
      <div>{group4}</div>
      <div>{group5}</div>
    </div>
  );
};

export default ButtonPanel;
