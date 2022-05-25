import { Component } from 'react';
import calculate from '../logic/calculate';
import Display from './display';
import Button from './button';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  componentDidMount() {
    this.setState({ total: '0' });
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    if (total === null && next === null) {
      this.setState({ total: '0' });
    }
  }

  buttonClick(buttonName) {
    this.setState((state) => calculate(state, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <Display total={total} operation={operation} next={next} />
        <div className="buttons line1">
          <Button buttonClick={this.buttonClick} buttonName="AC" />
          <Button buttonClick={this.buttonClick} buttonName="+/-" />
          <Button buttonClick={this.buttonClick} buttonName="%" />
          <Button buttonClick={this.buttonClick} buttonName="÷" />
        </div>
        <div className="buttons line2">
          <Button buttonClick={this.buttonClick} buttonName="7" />
          <Button buttonClick={this.buttonClick} buttonName="8" />
          <Button buttonClick={this.buttonClick} buttonName="9" />
          <Button buttonClick={this.buttonClick} buttonName="x" />
        </div>
        <div className="buttons line3">
          <Button buttonClick={this.buttonClick} buttonName="4" />
          <Button buttonClick={this.buttonClick} buttonName="5" />
          <Button buttonClick={this.buttonClick} buttonName="6" />
          <Button buttonClick={this.buttonClick} buttonName="-" />
        </div>
        <div className="buttons line4">
          <Button buttonClick={this.buttonClick} buttonName="1" />
          <Button buttonClick={this.buttonClick} buttonName="2" />
          <Button buttonClick={this.buttonClick} buttonName="3" />
          <Button buttonClick={this.buttonClick} buttonName="+" />
        </div>
        <div className="buttons line5">
          <Button buttonClick={this.buttonClick} buttonName="0" />
          <Button buttonClick={this.buttonClick} buttonName="." />
          <Button buttonClick={this.buttonClick} buttonName="=" />
        </div>
      </div>
    );
  }
}
