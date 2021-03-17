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
            fieldValue: ""
        }

        this.codeChange = this.codeChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }


    resetForm()
    {
        this.setState((state, props) => ({
            fieldValue:""
        }));
    }

    // text={this.state.fullText}
    // completedLine={this.state.completedLineNumber}
    // completedWords={this.state.completedWordsInCurrentLine}
    codeChange(e)
    {
        // for each line suggest a way to compare each word
        let typedWords = e.target.value.split(" ");
        console.log(typedWords);
        console.log(this.state.textList[this.state.line]);
        let neededWords = this.state.textList[this.state.line].split(" ");
        let wordCount = 0;

        console.log("Here are the typed words");
        console.log(typedWords.length);
        console.log(typedWords[typedWords.length-1]);
        console.log(neededWords[typedWords.length-1]);
        console.log(typedWords[typedWords.length-1]===neededWords[typedWords.length-1])

        // comparing words and count
        for(let i=0; i<typedWords.length; i++){
            if(typedWords[i]===neededWords[i])
            {
                console.log("here");
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
            this.setState((state, props) => ({
                line:this.state.line+1,
                word: 0
            })); 

            this.resetForm();
        }
        else
        {
            this.setState((state, props) => ({
                fieldValue:e.target.value,
                word: wordCount
            })); 
        }


        this.setState((state, props) => ({
            currentWord:e.target.value,
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
            <div className="container">
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Code here:</Form.Label>
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
