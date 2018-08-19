import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './component/photo.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Zillow challenge</h1>
        </header>
      <Photo/>
      </div>
    );
  }
}

export default App;
