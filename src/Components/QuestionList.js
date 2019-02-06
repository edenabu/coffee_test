import React from 'react';
import Question from './Question';
import Questions from './Questions';


const QuestionList = () => {
  return(
    <div>
      {
        Questions.map((question) => {
          return <Question question={question} />
        })
      }
    </div>
  )
}

export default QuestionList;
