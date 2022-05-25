import { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, next, operation } = this.props;
    return (
      <div className="display">
        {total}
        {operation}
        {next}
      </div>
    );
  }
}

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: null,
  operation: null,
  next: null,
};
