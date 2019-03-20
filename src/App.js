import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    counter: 0
  };

  handleIncrementCounter = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  handleDecrementCounter = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  }

  render() {
    const { counter } = this.state;

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        <button data-test="increment-button"
          onClick={this.handleIncrementCounter}>
          Increment counter
        </button>
        <button data-test="decrement-button"
          onClick={this.handleDecrementCounter}>
          Decrement button
        </button>
      </div>
    );
  }
}

export default App;
