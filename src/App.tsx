import React, { Component } from 'react';
import './App.css';

import WaifuPoll from './Poll';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Submissions from './Submissions';
import UserComponent from './UserComponent';
import FakeLogin from './FakeLogin';

import Leaderboards from './Leaderboards';


let loggedIn: boolean = false;

export class Answer {
  option: string;
  votes: number;
  image : string | undefined;

  constructor(option: string, image? : string | undefined) {
    this.option = option;
    this.votes = 0;
    this.image = image;
  }
}

export class Poll {
  pollQuestion: string;
  pollAnswers: Array<Answer>;
  constructor(pollQuestion: string, pollAnswers: Array<Answer>){
    this.pollQuestion = pollQuestion;
    this.pollAnswers = pollAnswers;
  }
}
class App extends Component {
  state = {
    polls: [new Poll( "Who is the better waifu?", [new Answer("Rem"), new Answer("Ram")] ) ],
    activePollIndex: 0,
  }
  constructor(props: any) {
    super(props);
  }

  newEntry = (data: any) => {
    let poll = this.state.polls[this.state.activePollIndex]; //select the active poll
    for (var answer in poll.pollAnswers) {
      if (poll.pollAnswers[answer].option === data.option) return false
    }
    poll.pollAnswers.push(new Answer(data.option, data.image));
    return true
  }
  newPoll = (data:any) =>{
    this.state.polls.push(new Poll(data.pollEntryName,[]));
    // this.state.activePollIndex += 1; //would be to make it the "active poll" but I haven't added support
    console.log("this.state.activePollIndex: ",this.state.activePollIndex);
    return true;
  }
  getPollTitle = () =>{
    return this.state.polls[this.state.activePollIndex].pollQuestion;
  }
  render() {
    let poll = this.state.polls[this.state.activePollIndex]; //select the active poll
    return (
    <BrowserRouter>
        <Header loggedIn={loggedIn}/>
        <div className="containerBody">
          <Switch>
            <Route path="/home"/>
            <Route path="/poll"><WaifuPoll polls={this.state.polls}pollQuestion={poll.pollQuestion} pollAnswers={poll.pollAnswers}/></Route>
            <Route path="/submissions"><Submissions newEntry={this.newEntry} newPoll={this.newPoll} activePollTitle={this.getPollTitle()}/></Route>
            <Route path="/login"><FakeLogin/></Route>
            <Route path="/usersettings"><UserComponent/></Route>
            <Route path="/leaderboards"><Leaderboards/></Route>
          </Switch>
          </div>
        <div className="footer">Prototype by Sophie Kujo, Sophie Wang, and Tyler Gwynn</div>
        </BrowserRouter>
    )
  }
}

export default App;
