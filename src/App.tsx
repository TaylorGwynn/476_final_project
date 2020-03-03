import React from 'react';
import logo from './logo.svg';
import './App.css';
import WaifuPoll from './Poll';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

let loggedIn: boolean = false;

function App() {
  return (
    <BrowserRouter>
        <Header loggedIn={loggedIn}/>
        <div className="container">
          <Switch>
            <Route path="/home"/>
            <Route path="/poll" component={WaifuPoll}/>
          </Switch>
          </div>
        <div className="footer">Prototype by Sophie Kujo, Sophie Wang, and Tyler Gwynn</div>
        </BrowserRouter>
  );
}

export default App;
