import React, { Component } from 'react';
import logo from './logo.svg';
import Book from './Components/Book';
import Input from './Components/Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Book />
          <Input />
          <Input />
      </div>
    );
  }
}

export default App;
