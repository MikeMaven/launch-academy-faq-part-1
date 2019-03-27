import React from 'react';
import QuestionContainer from '../containers/QuestionContainer'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <h1 id="hero">We're here to help:
        </h1>
        <QuestionContainer
          data = {this.props.data}
        />
      </div>
    )
  }
}

export default App;
