import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class TextBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            textList: this.props.text,
            word: 0,
            line: 0,
            currentWord: "",  //current word that is being typed
            fieldValue: "",
            timeStart:false
        }

        this.codeChange = this.codeChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }


    async resetForm()
    {
        await this.setState((state, props) => ({
            fieldValue:""
        }));
    }

    // text={this.state.fullText}
    // completedLine={this.state.completedLineNumber}
    // completedWords={this.state.completedWordsInCurrentLine}
    async codeChange(e)
    {
        if(this.state.timeStart===false)
        {
            this.props.startTime(true, false);
        }
        // for each line suggest a way to compare each word
        let typedWords = e.target.value.split(" ");
        let neededWords = this.state.textList[this.state.line].split(" ");
        let wordCount = 0;

        // comparing words and count
        for(let i=0; i<typedWords.length; i++){
            if(typedWords[i]===neededWords[i])
            {
                wordCount = wordCount+1;
            }
            else
            {
                break;
            }
        }

        // check line
        if(neededWords.length === wordCount)
        {
            await this.setState((state, props) => ({
                line:state.line+1,
                word: 0
            })); 

            this.resetForm();
        }
        else
        {
            await this.setState((state, props) => ({
                fieldValue:e.target.value,
                word: wordCount
            })); 
        }


        await this.setState((state, props) => ({
            currentWord:e.target.value,
            timeStart:true
        })); 

        this.props.handleChildStateChange(this.state);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.text !== state.textList) {
          return {
            textList: props.text,
          };
        }

        // Return null to indicate no change to state.
        return null;
    }

    render() {
        return (
            <div className="container" >
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Code here <em>(timer starts once you start typing)</em>:</Form.Label>
                        <Form.Control name="inputField" type="text"
                        value={this.state.fieldValue}
                        style={{backgroundColor: "#000000", color: "#4AF626"}} 
                        placeholder="" onChange={this.codeChange} />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
