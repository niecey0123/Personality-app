import React, { Component } from 'react'
import '../Home.css';
import Poll from 'react-polls';
 
const pollQuestion = 'How many serious relationships have you been in?'
const pollAnswers = [
  { option: 'Just One', votes: 20 },
  { option: '2 to 5', votes: 70 },
  { option: 'More Than 5', votes: 50 }
]
const pollStyles1 = {
  questionBold: true ,
  questionColor: '#9057fa',
  align: 'center',
  theme: 'purple'
}

class LovePoll extends Component{
  state = {
    pollAnswers: [...pollAnswers]
  }

  handleVote = voteAnswer => {
    const { pollAnswers } = this.state
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    })
    this.setState({
      pollAnswers: newPollAnswers
    })
  }
  render () {
    const { pollAnswers } = this.state
    return (
      <div>
        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} customStyles={pollStyles1} />
      </div>
    );
  }
};

export default LovePoll;