import React, { Component } from 'react';


import logo from './logo.svg';

import './App.css';
import Home from './containers/home';
import About from './containers/about';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
