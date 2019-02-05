import React from 'react';

class Question extends React.Component {
  render() {
    const question = this.props.question;

    return(
      <div>
        {question.question}
        {question.answers}
      </div>
    )
  }
}

export default Question;
