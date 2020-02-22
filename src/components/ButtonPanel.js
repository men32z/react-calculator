import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const paintGray = (i) => i < 3 ? '#E0E0E0' : undefined;
  const group1 = ['AC', '+/-', '%', '+'].map((x, i) => <Button key={x} name={x} color={paintGray(i)} />);
  const group2 = ['7', '8', '9', 'X'].map((x, i) => <Button key={x} name={x} color={paintGray(i)} />);
  const group3 = ['4', '5', '6', '-'].map((x, i) => <Button key={x} name={x} color={paintGray(i)} />);
  const group4 = ['1', '2', '3', '+'].map((x, i) => <Button key={x} name={x} color={paintGray(i)} />);
  const group5 = ['0', '.', '='].map((x, i) => {
    return (
      <Button key={x} name={x} color={i < 2 ? '#E0E0E0' : undefined} wide={i===0}/>
    )
  });

  return (
    <div className="button-panel">
      <div>{group1}</div>
      <div>{group2}</div>
      <div>{group3}</div>
      <div>{group4}</div>
      <div>{group5}</div>
    </div>
  );
};

export default ButtonPanel;
