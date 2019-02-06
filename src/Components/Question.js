import React from 'react';

class Question extends React.Component {
  render() {
    const question = this.props.question;

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
