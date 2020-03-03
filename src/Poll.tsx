import React, { Component } from "react";
import Poll from 'react-polls'
import "./Poll.css";



interface Properties {
  pollQuestion: string,
  pollAnswers: [],
}

export default class WaifuPoll extends Component<any, any> {
        // Setting answers to state to reload the component with each vote
    constructor(props : any, state : any) {
        super(props, state)
        console.log(props)
    }
    
    handleVote = (voteAnswer: any) => {
        // TODO: INTERACTION WITH SERVER SHOULD BE HANDLED HERE
        const newPollAnswers = this.props.pollAnswers.map((answer: any) => {
          if (answer.option === voteAnswer) answer.votes++
          return answer
        })
        this.setState({
          pollAnswers: newPollAnswers
        })
      }

      render () {
        return (
          <div className="Poll">
            <Poll question={this.props.pollQuestion} answers={this.props.pollAnswers} onVote={this.handleVote} noStorage/>
          </div>
        );
      }
}