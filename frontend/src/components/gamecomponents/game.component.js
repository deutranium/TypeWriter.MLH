import React, { Component } from 'react'
import CodeBox from './codeBox.component'
import TextBox from './textBox.component'
import ProgressLine from './progessline.component'


export default class GamePage extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            fullText:"",  //contains the code snippet
            textList:[],  //contains the list of spliced texts
            position:0,  //position in the list
            currentTypeText:"",
            totalNumberOfWords:0,
            totalNumberOfCompletedWords:0,
            completedLineNumber:1,
            completedWordsInCurrentLine:3
        };
        this.handleChildStateChange = this.handleChildStateChange.bind(this);
    }

    componentDidMount()
    {
        // client<->server comm


        //get the text
        this.setState((state, props) => ({
            fullText: ['if (helloWorld) { return true; } else {return false;}', 'for(let i =0; i<list.length; i++){ }'],
        }));

        //find the number of words in the text
        let tempList = this.state.fullText.split(" ");
        this.setState((state, props) => ({
            totalNumberOfWords:tempList.length
        })); 
        //generate the progress line
    }

    handleChildStateChange=(childState)=>
    {
        this.setState((state, props)=>({
            completedWordsInCurrentLine:childState.words,
            completedLineNumber:childState.line,
        }));
    };

    render() {
        return (
            <div className="container">
                <CodeBox text={this.state.fullText}
                    completedLine={this.state.completedLineNumber}
                    completedWords={this.state.completedWordsInCurrentLine}/>

                <TextBox text={this.state.fullText}
                    completedLine={this.state.completedLineNumber}
                    completedWords={this.state.completedWordsInCurrentLine}
                    handleChildStateChange={this.state.handleChildStateChange}/>

                <ProgressLine total={this.state.totalNumberOfWords}
                number={this.state.totalNumberOfCompletedWords}/>
            </div>
        )
    }
}
