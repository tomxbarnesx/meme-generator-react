import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MemeGenerator from './components/MemeGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MemeGenerator />
        <Footer />
      </div>
    );
  }
}

export default App;
