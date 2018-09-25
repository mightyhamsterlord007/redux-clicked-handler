import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import stores from './stores';

class App extends Component {


  render() {
    return (
      <Provider store={stores}>
        <div className='App'>
          <Nav />
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;




