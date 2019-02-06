import React, { Component } from 'react';
import './App.css';
import QuestionList from './Components/QuestionList.js'
import Submit from './Components/Submit.js'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      < BrowserRouter >
        <div>
          <QuestionList />
          <Route exact path = "/" component = { Welcome } />
          <Route path = "/question/:number" component = { Question } />
        </div>
      < / BrowserRouter >
    );
  }
}

export default App;
