import React, { Component } from "react";
import './Submissions.css'
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Submissions extends Component<any, any> {
    private readonly inputOpenFileRef: React.RefObject<HTMLInputElement> = React.createRef();
    state = { image: undefined, entryName: "", pollEntryName: "", error: "", submissionMsg: "", pollSubmissionMsg: ""}
    constructor(props: any, state: any) {
        super(props)
        this.handleClick.bind(this);
    }

    handleClick = (e: any) => {
        this.inputOpenFileRef.current?.click()
        if (e.target.files && e.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(e.target.files[0])
            })
            console.log(this.state.image)
        }
    }

    setEntryName = (e:any) => {
        e.persist();
        this.setState({
            entryName : e.target.value
        })
        if (this.state.entryName.length > 0) this.setState({ error: "" })
    }
    setPollEntryName = (e:any) => {
        e.persist();
        this.setState({
            pollEntryName : e.target.value
        })
        if (this.state.pollEntryName.length > 0) this.setState({ error: "" })
    }

    renderError() {
        const { entryName } = this.state
        return <Form.Label>{this.state.error}</Form.Label>
    }
    renderSubmissionMsg(){
        const { entryName } = this.state
        return <Form.Label>{this.state.submissionMsg}</Form.Label>
    }
    renderPollSubmissionMsg(){
        const { pollEntryName } = this.state    
        return <Form.Label>{this.state.pollSubmissionMsg}</Form.Label>
    }

    submitEntry = () => {
        if (this.state.entryName === "") {
            this.setState({
                error: "Please enter a name for your entry."
            })
            return
        }
        let result = this.props.newEntry({option: this.state.entryName, image: this.state.image})
        if (!result) {
            this.setState({ error: "This entry already exists in the poll!" })
        } else {
            this.setState({ submissionMsg: "Successfully added your entry." })
        }
    }
    submitPollEntry = () => {
        if (this.state.pollEntryName === "") {
            this.setState({
                error: "Please enter a name for your Poll entry."
            })
            return
        }
        //TODO make this into a new poll rather than a new entry!
        // let result = this.props.newEntry({option: this.state.pollEntryName, image: this.state.image})
        // if (!result) {
        //     this.setState({ error: "This Poll already exists!" })
        // } else {
        //     this.setState({ pollSubmissionMsg: "Successfully added your Poll entry?" })
        // }
    }

    render() {
        return (
            <div id="Submissions">
                <div className="container">
                    <div id="optionEntry">
                        <div id="imageField">
                            <img id="profile-picture" 
                                src={
                                this.state.image != null ?
                                this.state.image : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            }
                            alt=""/>
                            <div className="controlsBox">
                                <input 
                                    style={{display: 'none'}}
                                    accept='image/*'
                                    type="file"
                                    onChange={this.handleClick}
                                    ref={this.inputOpenFileRef}
                                />
                                <Button variant="secondary" onClick={this.handleClick} size="sm">Select Image</Button>
                            </div>
                        </div>
                        <div id="nameField">
                            <h1>Submit your entry to the poll!</h1>
                            <Form onSubmit={(e : any) => {e.preventDefault()}}>
                            <Form.Group>
                                <Form.Label>Waifu Name</Form.Label>
                                <Form.Control type="text" placeholder="Waifu Name" onChange={this.setEntryName}/>
                                {this.renderSubmissionMsg()}
                                <Form.Text className="text-muted">Enter your waifu's name!</Form.Text>
                            </Form.Group>
                            <Button variant="primary" onClick={this.submitEntry}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div id="pollEntry">
                        <div id="pollNameField">
                            <h1>Submit your new poll!</h1>
                            <Form onSubmit={(e : any) => {e.preventDefault()}}>
                            <Form.Group>
                                <Form.Label>Poll Title</Form.Label>
                                <Form.Control type="text" placeholder="Poll Name" onChange={this.setPollEntryName}/>
                                {this.renderPollSubmissionMsg()}
                                {/* <Form.Text className="text-muted">Enter your waifu's name!</Form.Text> */}
                            </Form.Group>
                            <Button variant="primary" onClick={this.submitPollEntry}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}