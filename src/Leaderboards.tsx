import React, { Component } from "react";
import Poll from 'react-polls'
import { Answer } from "./App";
import './Poll.css'

class pastPoll {
    pollQuestion : string;
    pollAnswers : Answer[];
    date : string;
    
    constructor(date: string, pollQuestion : string, ...pollAnswers: Answer[]) {
        this.pollQuestion = pollQuestion
        this.pollAnswers = pollAnswers
        this.date = date;
    }
}

export default class Leaderboards extends Component<any, any> {
    state = {polls:[
        new pastPoll("2020/02/14", "poll 1", new Answer("answer 1"), new Answer("answer 2")),
        new pastPoll("2020/02/21", "poll 2", new Answer("answer 1"), new Answer("answer 2")),
        new pastPoll("2020/02/28", "poll 3", new Answer("answer 1"), new Answer("answer 2"))
    ],}
    constructor(props: any, state: any) {
        super(props, state)
    }

    handleVote = (_voteAnswer: any) => {
        // THIS EXISTS TO MAKE THE INTERPRETER HAPPY ;D   
    }

    render () {
        return (<div>
            {this.state.polls.map((poll) => {
                return <div className="Poll"><Poll question={poll.pollQuestion} answers={poll.pollAnswers} onVote={this.handleVote} noStorage/><div className="pollDate">{poll.date}</div></div>
            })}
        </div>);
    }
}