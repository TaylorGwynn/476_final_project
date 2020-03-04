import React, {Component} from 'react';
import './UserComponent.css';
import { Form, Button, Table, Dropdown } from "react-bootstrap";
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
    return (<div>
      <div id="settingspage">
                <div className="container">
                    <div id="entry">
                        
      <Form>
        <h1>Settings</h1>
        <img className="pfp"src={this.state.profilepicpath}/>
        <Button variant="success">Change Profile Picture</Button>
        <Table striped bordered>
          <thead>
          <tr>
            <td className="first">Username </td>
            <td>{this.state.username}
        <Button variant="secondary">Change Username</Button></td>
          </tr>
          <tr>
            <td className="first">Email </td>
            <td>{this.state.email} 
        <Button variant="secondary">Change Email</Button></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><Button variant="secondary">Change Password</Button></td>
          </tr>
          <tr>
            <td className="first">Theme</td>
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Select a Theme
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Marisa</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Asuka</Dropdown.Item>
                <Dropdown.Item href="#/action-3">DIO</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </td>
          </tr>
          
          </thead>
        </Table>
        <Button variant="primary">Logout</Button>
        </Form>
        
        </div>
                    </div>
                </div>
            </div>)
    }
  }