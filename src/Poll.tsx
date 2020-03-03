import React, { Component } from "react";
import Poll from 'react-polls'
import "./Poll.css";

const pollQuestion = 'Who is the better waifu?'
const pollAnswers = [
  { option: 'Rem', votes: 0 },
  { option: 'Ram', votes: 0 },
]

interface Properties {

}


export default class WaifuPoll extends Component<{}, {pollAnswers: any}> {
        // Setting answers to state to reload the component with each vote
    constructor(props : Properties) {
        super(props)
        this.state = {
            pollAnswers: [...pollAnswers]
          }
    }
    
    handleVote = (voteAnswer: any) => {
        // TODO: INTERACTION WITH SERVER SHOULD BE HANDLED HERE
        const { pollAnswers } = this.state
        const newPollAnswers = pollAnswers.map((answer: any) => {
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
          <div className="Poll">
            <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} noStorage/>
          </div>
        );
      }
}