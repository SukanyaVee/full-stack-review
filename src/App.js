import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import AccountInfo from './components/AccountInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/(access_token.*)?" component={Home}/>
        <Route path="/private" component={AccountInfo}/>
      </div>
    );
  }
}

export default App;
