import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyComponent from './Mycomponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Realtime cryptocurrency updates using coincap API</h1>
        </header>
        <p className="App-intro">

        </p>
        <MuiThemeProvider>
          <MyComponent />
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
