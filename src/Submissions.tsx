import React, { Component } from "react";
import './Submissions.css'
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Submissions extends Component<any, any> {
    private readonly inputOpenFileRef: React.RefObject<HTMLInputElement> = React.createRef();
    state = { image: undefined, entryName: "", error: "", }
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

    renderError() {
        const { entryName } = this.state
        return <Form.Label>{this.state.error}</Form.Label>
    }

    submitEntry = () => {
        if (this.state.entryName === "") {
            this.setState({
                error: "Please enter a name for your entry."
            })
            return
        }
        let result = this.props.newEntry({option: this.state.entryName, votes: 0})
        if (!result) {
            this.setState({ error: "This entry already exists in the poll!" })
        } else {
            this.setState({ error: "Successfully added your entry." })
        }
    }

    render() {
        return (
            <div id="Submissions">
                <div className="container">
                    <div id="entry">
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
                            <Form>
                            <Form.Group>
                                <Form.Label>Waifu Name</Form.Label>
                                <Form.Control type="text" placeholder="Waifu Name" onChange={this.setEntryName}/>
                                {this.renderError()}
                                <Form.Text className="text-muted">Enter your waifu's name!</Form.Text>
                            </Form.Group>
                            <Button variant="primary" onClick={this.submitEntry}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}