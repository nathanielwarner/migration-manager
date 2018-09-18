import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Site Migration Manager!</h1>
        </header>
        <p className="App-intro">
          You'll find a spreadsheet of old and new sites to fill in below.
        </p>
      </div>
    );
  }
}

export default App;
