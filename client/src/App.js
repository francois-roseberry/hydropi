import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Hydropi</h1>
        </header>
        <p className="app-intro">
          Future hydroponics control system
        </p>
      </div>
    );
  }
}
