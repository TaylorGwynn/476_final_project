import React, {Component} from 'react';
import './UserComponent.css';
import { userInfo } from 'os';
// import axios from 'axios';

type UserProps = {
  displaytext?: string;
  
};
type MyState = {
  username?: string;
  email?: string;
  voted?: Array<string>;
  profilepicpath?: string;
  userID: number;
}

export default class UserComponent extends Component<UserProps,MyState> {

  constructor(props: UserProps) {
      super(props)
      // this.state = {memenums:"69"}
      //TODO: get user ID from session ID or wherever
        this.state = {userID:523}
      }
      //TODO: grab user data from json or database or something 
      //  instead of hardcoding like here
  componentDidMount(){
        this.setUserInfo();
      }
  setUserInfo(){
    this.setState({
      username: "astolfoBest",
      email: "jane_smith@fateGO.com",
      profilepicpath: "https://avatarfiles.alphacoders.com/123/123213.png"
    })
  }

  render() {

    const elementt = (<div>{this.state.username}'s Profile</div>)
    const profilePic = (<img className="profilePic" 
      src={this.state.profilepicpath} alt="profile picture"/>)
      // src={this.state.profilepicpath} alt="profile picture"/>)
    const logout = (
    <div className="logoutButton">{profilePic} <div className="logoutText"><p>Logout!</p></div></div>)

    const topBar = (<div className="topBar">{logout}</div>)
    return (<div className="compBox">
    <h3>First Component, Hewwlo?:</h3>
    
        {/* {this.props.displaytext} */}
        {topBar}<br/>
        {elementt}
        <p>Email: {this.state.email}</p>
        {/* {this.state.username}<br/> */}
    {/* <button click="newMeme()">New Meme</button> */}
    </div>)
    }
  }