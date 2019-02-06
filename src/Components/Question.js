import React from 'react';
import questions from "./Questions";

class Question extends React.Component {
  constructor(){
    super()
    this.state = {
      question: "",
      selection: "",
    }
  }

  handdleSubmit = (e) => {
    this.props.addAnswer()
  }
  handdleChange = (e) => {
    this.setState({selection: e.taget.value})
  }
  componentDidMount(){
    let numQuest = Number(this.props.match.params.number)
    let question = questions[numQuest-1]
    this.setState({question:question})
  }
  render() {
    const question = this.state.question;

    return(
      <h1>
      <form>
        <label> What region are you from? </label>
        <br/>
        <input type="radio" name="answer" value="ANSWER" checked />ANSWER<br/>
        <input type="radio" name="answer" value="ANSWER" checked />ANSWER<br/ >
      </form>
      </h1>
    )
  }
}

export default Question;
