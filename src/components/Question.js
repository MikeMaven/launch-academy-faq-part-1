import React from 'react'

const Question = props => {
  return(
    <div id="question-box">
    <i onClick={props.handleClick} className={props.iconClass}></i>
      <div id="question-and-answer">
        <h4>{props.question}</h4>
        <p>{props.answer}</p>
      </div>
    </div>
  )
}

export default Question
