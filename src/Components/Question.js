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
      <div>{question.question}</div>
    )
  }
}

export default Question;
