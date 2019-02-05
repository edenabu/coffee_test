import React, { Component } from 'react';
import './App.css';
import QuestionList from './Components/QuestionList.js'
// import Submit from './Components/Submit.js'

class App extends Component {
  render() {
    return (
      <div>
        <QuestionList />
      </div>
    );
  }
}

export default App;
