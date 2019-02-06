import React from 'react';

class Question extends React.Component {
  render() {
    const question = this.props.question;

    return(
      <ol>
      {question.question}
        <br></br>
        {question.answers}
      </ol>
    )
  }
}

export default Question;
