import React, { Component } from 'react';
import Dnd from './Components/Dnd';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div className={'container'}>
              <div className={'row'}>
                  <div className={'col'}>
                      <p className={'text-center'}>Hello</p>
                      <Dnd />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
