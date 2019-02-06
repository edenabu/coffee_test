import React from 'react';
import questions from "./Questions";
import "./Question.css"

class Question extends React.Component {
  constructor(){
    super()
    this.state = {
      question: "",
      selection: "",
    }
  }

  handleSubmit = (e) => {
    this.props.addAnswer()
  }
  handleChange = (e) => {
    this.setState({selection: e.target.value})
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
        <input type="radio" name="answer" value="ANSWER" checked />ANSWER<br/>
      </form>
      </h1>
    )
  }
}

export default Question;
