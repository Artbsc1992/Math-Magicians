import React, { Component } from 'react';
import Calculator from './components/Calculator';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Lets do some math!</h2>
        </div>
        <Calculator />
      </div>
    );
  }
}

export default App;
