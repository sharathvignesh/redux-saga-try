import React, { Component } from 'react';
import logo from '../logo.svg';
import './../Styles/App.css';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br />
        <div className="row">
          <div>Start hacking ! Stage is set ! </div>
        </div>
        <br />
        <div className="App-intro">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
