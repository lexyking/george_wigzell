import React, { Component } from 'react';
import { Home } from './components/index'

import './App.css';

class App extends Component {
  render() {
    return (
      <section className="home">
        <h1>George Wigzell</h1>
        <Home />
      </section>
    );
  }
}

export default App;
