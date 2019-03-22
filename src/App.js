import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    counter: 0,
    errorMessage: ''
  };

  handleIncrementCounter = () => {
    const { counter, errorMessage } = this.state;
    this.setState({
      counter: counter + 1,
      errorMessage: counter ? errorMessage : ''
    });
  }

  handleDecrementCounter = () => {
    const { counter } = this.state;

    if (!counter) {
      this.setState({
        errorMessage: 'The counter can\'t go below zero'
      });
      return;
    }

    this.setState({
      counter: counter - 1
    });
  }

  render() {
    const { counter, errorMessage } = this.state;

    return (
      <div data-test="component-app">
        <h1
          data-test="counter-display">
          The counter is currently {counter}
        </h1>

        <h2
          style={{ color: '#ff0000' }}
          data-test="error-display" >
          {errorMessage}
        </h2>

        <button
          data-test="increment-button"
          onClick={this.handleIncrementCounter}>
          Increment counter
        </button>

        <button
          data-test="decrement-button"
          onClick={this.handleDecrementCounter}>
          Decrement button
        </button>
      </div>
    );
  }
}

export default App;
