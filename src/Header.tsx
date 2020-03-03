import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'

interface Properties {
    loggedIn: boolean,
}
export default class Header extends Component<Properties> {

    constructor(props : Properties) {
        super(props);
        this.state = {
            loggedIn: props.loggedIn
        }
    }
    render () {
        const { loggedIn } = this.props;
        return (
            <div className='header'>
                <Link to="/poll">Poll</Link>
                <Link to="/submissions">Submissions</Link>
                <Link to="/leaderboards">Leaderboards</Link>
                <div id="Account">{loggedIn ? <Link to="/usersettings">User Settings</Link> : <Link to="/login">Login</Link>}</div>
            </div>
        )
    }
}