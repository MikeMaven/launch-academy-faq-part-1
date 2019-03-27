import React, { Component } from 'react';
import Question from '../components/Question'

class QuestionContainer
  extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedId: null,
        selected: null
      }
      this.setSelectedId = this.setSelectedId.bind(this);
    }

    setSelectedId(questionId) {
      this.setState({ selectedId: questionId, selected: true })
    }

    render(){

      let questions = this.props.data.map(question => {

        let handleClick = () => {
          this.setSelectedId(question.id)
        }

        let answer
        let iconClass
        if (question.id === this.state.selectedId){
          answer = question.answer
          iconClass = "fas fa-minus-square"
        } else {
          answer = ""
          iconClass = "fas fa-plus-square"
        }

        return(
          <Question
            id={question.id}
            question={question.question}
            handleClick={handleClick}
            answer={answer}
            iconClass={iconClass}
            />
          )
        })

      return(
        <div>{questions}</div>
      )
    }
}

export default QuestionContainer
