import React, {Component} from 'react';
import './UserComponent.css';
import { Form, Button } from "react-bootstrap";

type UserProps = {
  displaytext?: string;
  
};
type MyState = {
  username?: string;
  pw?: string;
  error?: string;
}

export default class UserComponent extends Component<UserProps,MyState> {
  state = {username:"", pw:"", error:""}

  constructor(props: UserProps, state: any) {
      super(props)
      }
  renderError() {
    const { username } = this.state
    return <Form.Label className="errormsg">{this.state.error}</Form.Label>
  }
  //constantly run as username is typed into text field
  setUserName = (e:any) => {
    e.persist();
    this.setState({
        username : e.target.value,
    })
    if (this.state.username.length > 0) this.setState({ error: "" })
  }

  setPw = (e:any) => {
    e.persist();
    this.setState({
        pw : e.target.value,
    })
    if (this.state.pw.length > 0) this.setState({ error: "" })
  }

  login = () => {
    if (this.state.username === "") {
        this.setState({
            error: "Please enter a username and password."
        })
        return
    }
    if (this.state.username === "astolfoBest" && this.state.pw === "1234"){
      
    }else{
      this.setState({
        error: "Incorrect username or password."
      })
      return
    }
}
  render() {
    return(<div>
      <div id="loginpage">
                <div className="container">
                    <div id="entry">
                        
      <Form>
        <h1>Login</h1>
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" id="username" placeholder="Username" onChange={this.setUserName}/>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" id="password" placeholder="Password" onChange={this.setPw}/>
            {this.renderError()}
            
        </Form.Group>
        <Button variant="primary" onClick={this.login}>Submit</Button>
        </Form>
        </div>
                    </div>
                </div>
            </div>
)
    }
  }