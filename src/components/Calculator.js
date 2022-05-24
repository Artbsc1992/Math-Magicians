import { Component } from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  buttonClick(buttonName) {
    this.setState((state) => calculate(state, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          { total }
          {' '}
          { operation }
          {' '}
          { next }
        </div>
        <div className="buttons line1">
          <button type="button" onClick={() => this.buttonClick('AC')}>AC</button>
          <button type="button" onClick={() => this.buttonClick('+/-')}>+/-</button>
          <button type="button" onClick={() => this.buttonClick('%')}>%</button>
          <button type="button" onClick={() => this.buttonClick('÷')}>÷</button>
        </div>
        <div className="buttons line2">
          <button type="button" onClick={() => this.buttonClick('7')}>7</button>
          <button type="button" onClick={() => this.buttonClick('8')}>8</button>
          <button type="button" onClick={() => this.buttonClick('9')}>9</button>
          <button type="button" onClick={() => this.buttonClick('x')}>x</button>
        </div>
        <div className="buttons line3">
          <button type="button" onClick={() => this.buttonClick('4')}>4</button>
          <button type="button" onClick={() => this.buttonClick('5')}>5</button>
          <button type="button" onClick={() => this.buttonClick('6')}>6</button>
          <button type="button" onClick={() => this.buttonClick('-')}>-</button>
        </div>
        <div className="buttons line4">
          <button type="button" onClick={() => this.buttonClick('1')}>1</button>
          <button type="button" onClick={() => this.buttonClick('2')}>2</button>
          <button type="button" onClick={() => this.buttonClick('3')}>3</button>
          <button type="button" onClick={() => this.buttonClick('+')}>+</button>
        </div>
        <div className="buttons line5">
          <button type="button" onClick={() => this.buttonClick('0')}>0</button>
          <button type="button" onClick={() => this.buttonClick('.')}>.</button>
          <button type="button" onClick={() => this.buttonClick('=')}>=</button>
        </div>
      </div>
    );
  }
}
