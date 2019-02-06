import React, { Component } from 'react';
import './App.css';
// import QuestionList from './Components/QuestionList.js'
import { BrowserRouter, Route } from 'react-router-dom';
import Question from './Components/Question';
import Welcome from './Components/Welcome'

class App extends Component {
  constructor(){
    super()
    this.state = {
      answers:[],
    }
  }
  addAnswer( answer ) {
    let oldAnswers = this.state.answers;
    oldAnswers.push( answer )
    this.setState({ answers: oldAnswers })
  }

  render() {
    return (
      < BrowserRouter >
        <div>
          <Route exact path = "/" component = { Welcome } />
          <Route path = "/question/:number" render = { props => <Question {...props} addAnswer={this.addAnswer}/> } />
        </div>
      < / BrowserRouter >
    );
  }
}

export default App;
