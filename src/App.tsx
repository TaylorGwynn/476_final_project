import React, { Component } from 'react';
import './App.css';

import WaifuPoll from './Poll';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Submissions from './Submissions';
<<<<<<< HEAD
import UserComponent from './UserComponent';
import FakeLogin from './FakeLogin';
=======
import Leaderboards from './Leaderboards';
>>>>>>> 839f5770693b4d62519ea6fdf71478eb7647b55d

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

class App extends Component {
  state = {
    pollQuestion:'Who is the better waifu?',
    pollAnswers: [
      new Answer("Rem"),
      new Answer("Ram"),
    ],
  }
  constructor(props: any) {
    super(props);
  }

  newEntry = (data: any) => {
    for (var answer in this.state.pollAnswers) {
      if (this.state.pollAnswers[answer].option === data.option) return false
    }
    this.state.pollAnswers.push(new Answer(data.option, data.image));
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
<<<<<<< HEAD
            <Route path="/login"><FakeLogin/></Route>
            <Route path="/usersettings"><UserComponent/></Route>
=======
            <Route path="/leaderboards"><Leaderboards/></Route>
>>>>>>> 839f5770693b4d62519ea6fdf71478eb7647b55d
          </Switch>
          </div>
        <div className="footer">Prototype by Sophie Kujo, Sophie Wang, and Tyler Gwynn</div>
        </BrowserRouter>
    )
  }
}

export default App;
