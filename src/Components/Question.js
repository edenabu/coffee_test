import React from 'react';
import questions from "./Questions";
import "./Question.css"

class Question extends React.Component {
  constructor(){
    super()
    this.state = {
      question:  {
          question:"",
          answers: [],
          identifier: ""
      },
      selection: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addAnswer(this.state.selection)
    let next = Number(this.props.match.params.number)+1
    if(next > questions.length ) {
      this.props.history.push("/results")
    } else {
      this.props.history.push(`/question/${next}`)
    }
  }
  handleChange = (e) => {
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

      <form onSubmit={this.handleSubmit}>
        <label> {question.question} </label>
        {
          question.answers.map((answer, i) => {
            return(
              <div key={i}>
                <input  type="radio" name="answer" value={answer} onChange={this.handleChange}/>  {answer}
              </div>
            )
          })
        }

        <input type="submit" name="submit" />
      </form>

    )
  }
}

export default Question;
