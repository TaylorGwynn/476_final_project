import React, { Component } from 'react';
import './App.css';

import WaifuPoll from './Poll';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Submissions from './Submissions';

let loggedIn: boolean = false;

class App extends Component {
  state = {
    pollQuestion:'Who is the better waifu?',
    pollAnswers: [
      { option: 'Rem', votes: 0 },
      { option: 'Ram', votes: 0 },
    ],
  }
  constructor(props: any) {
    super(props);
  }

  newEntry = (data: any) => {
    for (var answer in this.state.pollAnswers) {
      if (this.state.pollAnswers[answer].option === data.option) return false
    }
    this.state.pollAnswers.push(data);
    return true
  }
  render() {
    return (
    <BrowserRouter>
        <Header loggedIn={loggedIn}/>
        <div className="containerBody">
          <Switch>
            <Route path="/home"/>
            <Route path="/poll"><WaifuPoll pollQuestion={this.state.pollQuestion} pollAnswers={this.state.pollAnswers}/></Route>
            <Route path="/submissions"><Submissions newEntry={this.newEntry}/></Route>
          </Switch>
          </div>
        <div className="footer">Prototype by Sophie Kujo, Sophie Wang, and Tyler Gwynn</div>
        </BrowserRouter>
    )
  }
}

export default App;
