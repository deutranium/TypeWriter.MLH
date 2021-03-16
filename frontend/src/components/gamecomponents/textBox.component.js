import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class TextBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            textList: this.props.text,
            word: this.props.completedWords,
            line: this.props.completedLine,
            currentWord: ""  //current word that is being typed
        }

        this.codeChange = this.codeChange.bind(this);
    }

    // text={this.state.fullText}
    // completedLine={this.state.completedLineNumber}
    // completedWords={this.state.completedWordsInCurrentLine}
    codeChange(e)
    {
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
        if(typedWords.length == neededWords.length)
        {
            this.setState({
                line:this.state.line+1
            });
        }

        this.setState({
            line:this.state.line+1,
            currentWord:e.target.value,
            word: wordCount
        });

        this.props.handleChildStateChange(this.state);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.text !== state.textList || props.completedWords!==state.word || props.completedLine!==state.line) {
          return {
            textList: props.text,
            line: props.completedLine,
            word: props.completedWords
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
                        <Form.Control type="text" style={{backgroundColor: "#000000", color: "#4AF626"}} 
                        placeholder="" onChange={this.codeChange} />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
