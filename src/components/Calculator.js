import { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './display';
import Button from './button';
// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [operators, setOperators] = useState({
    total: null,
    operation: null,
    next: null,
  });

  const buttonClick = (buttonName) => {
    setOperators(calculate(operators, buttonName));
  };

  const { total, next, operation } = operators;
  if (total === null && next === null) {
    setOperators({ total: '0' });
  }
  return (
    <div className="calculator">
      <Display total={total} operation={operation} next={next} />
      <div className="buttons line1">
        <Button buttonClick={buttonClick} buttonName="AC" />
        <Button buttonClick={buttonClick} buttonName="+/-" />
        <Button buttonClick={buttonClick} buttonName="%" />
        <Button buttonClick={buttonClick} buttonName="÷" />
      </div>
      <div className="buttons line2">
        <Button buttonClick={buttonClick} buttonName="7" />
        <Button buttonClick={buttonClick} buttonName="8" />
        <Button buttonClick={buttonClick} buttonName="9" />
        <Button buttonClick={buttonClick} buttonName="x" />
      </div>
      <div className="buttons line3">
        <Button buttonClick={buttonClick} buttonName="4" />
        <Button buttonClick={buttonClick} buttonName="5" />
        <Button buttonClick={buttonClick} buttonName="6" />
        <Button buttonClick={buttonClick} buttonName="-" />
      </div>
      <div className="buttons line4">
        <Button buttonClick={buttonClick} buttonName="1" />
        <Button buttonClick={buttonClick} buttonName="2" />
        <Button buttonClick={buttonClick} buttonName="3" />
        <Button buttonClick={buttonClick} buttonName="+" />
      </div>
      <div className="buttons line5">
        <Button buttonClick={buttonClick} buttonName="0" />
        <Button buttonClick={buttonClick} buttonName="." />
        <Button buttonClick={buttonClick} buttonName="=" />
      </div>
    </div>
  );
};

export default Calculator;
