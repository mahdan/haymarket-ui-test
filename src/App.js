import React, { Component } from 'react';
import './App.scss';
import Carousel from './components/carousel/carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;
