import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/routes/RoutesContainer';
import {NavBar} from '../components/views'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <NavBar />
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;
