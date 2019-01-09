import React, { Component } from 'react';
import logo from './logo.svg';
import demo from './demo.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="App-logo" alt="logo" width="250px" />
          <p className="subtitle">simple palette management for humans.</p>
        </header>
        <div className="demo-container">
          <div className="demo">
            <img src={demo} width="75%" alt="demo" />
          </div>
          <div className="explanation">
            Create brand palettes to use anywhere.
            <br />
            <br />
            Easily access just the right color to create beautiful, on-brand presentations and documents.
            <br />
            <br />
            Never forget a color again.
          </div>
        </div>
        <div className="download">
          <a className="download-link" href="https://s3-us-west-2.amazonaws.com/hueman/Hueman-0.1.0.dmg">download now</a>
        </div>
      </div>
    );
  }
}

export default App;
