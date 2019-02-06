import React, { Component } from 'react';
import './App.css';
// import QuestionList from './Components/QuestionList.js'
import { BrowserRouter, Route } from 'react-router-dom';
import Question from './Components/Question';
import Welcome from './Components/Welcome'

class App extends Component {
  render() {
    return (
      < BrowserRouter >
        <div>
          <Route exact path = "/" component = { Welcome } />
          <Route path = "/question/:number" component = { Question } />
        </div>
      < / BrowserRouter >
    );
  }
}

export default App;
