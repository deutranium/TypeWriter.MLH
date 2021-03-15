import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class TextBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            currentWord:""  //current word that is being typed
        }

        this.codeChange = this.codeChange.bind(this);
    }

    codeChange(e)
    {
        this.setState({
            currentWord: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Code here:</Form.Label>
                        <Form.Control type="text" style={{backgroundColor: "#000000", color: "#4AF626"}} 
                        placeholder="" onChange={this.codeChange} />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
