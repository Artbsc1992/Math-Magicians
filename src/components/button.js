import { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends Component {
  render() {
    const { buttonClick, buttonName } = this.props;
    return (
      <button type="button" onClick={() => buttonClick(buttonName)}>{ buttonName }</button>
    );
  }
}

Button.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};
