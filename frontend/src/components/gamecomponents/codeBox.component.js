import React, { Component } from 'react'

export default class CodeBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            position:0,
            text:"",
            textList:[]
        }
    }

    componentDidMount()
    {
        this.setState((state, props) => ({
            position: this.props.position,
            text: this.props.text,
            textList: this.props.text
        }));
    }

    render() {
        return (
            <div>
                <p className="completedText text-success"></p>
                <p className="mistypedText text-warning"></p>
                <p className="remainingText"></p>
            </div>
        )
    }
}
