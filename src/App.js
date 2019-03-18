import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently</h1>
      </div>
    );
  }
}

export default App;
