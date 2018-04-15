import React, { Component } from 'react';
import Header from './Components/LoginPage/LoginPage';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LoginPage />
      </div>
    );
  }
}

export default App;
