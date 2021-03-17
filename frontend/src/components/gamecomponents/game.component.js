import React, { Component } from 'react';
import CodeBox from './codeBox.component';
import TextBox from './textBox.component';
import ProgressLine from './progessline.component';
import Timer from './timer/timer.component';
import ResultModal from './resultModal.component';

export default class GamePage extends Component {
    
    constructor(props)
    {
        super(props);
        this.state ={
            fullText:"",  //contains the code snippet
            textList:[],  //contains the list of spliced texts
            position:0,  //position in the list
            currentTypeText:"",
            totalNumberOfWords:25,
            totalNumberOfCompletedWords:5,
            completedLineNumber:0,
            completedWordsInCurrentLine:0,
            startedTyping:false,
            completedTyping:false,
            time:""
        };
        this.handleChildStateChange = this.handleChildStateChange.bind(this);
        this.onTimeComplete = this.onTimeComplete.bind(this);
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
            completedWordsInCurrentLine:childState.word,
            completedLineNumber:childState.line,
        }));
        console.log("below are the line numbers");
        console.log(this.state.completedLineNumber);
        console.log(this.state.fullText.length);

        if(this.state.completedLineNumber!=0 && this.state.completedLineNumber === (this.state.fullText.length-1))
        {
            this.setState((state, props)=>({
                completedTyping:true
            }));
        }
    };

    onTimeComplete=(timerValue)=>
    {
        this.setState((state, props) => ({
            time:timerValue
        }));
    };

    render() {
        return (
            <div className="container">
                <Timer start={this.state.startedTyping} 
                complete={this.state.completedTyping}
                onTimeComplete={this.onTimeComplete}/>
                <hr/>
                <CodeBox text={this.state.fullText}
                    completedLine={this.state.completedLineNumber}
                    completedWords={this.state.completedWordsInCurrentLine}/>
                <hr/>
                <TextBox text={this.state.fullText}
                    start={this.state.startedTyping} 
                    complete={this.state.completedTyping}
                    handleChildStateChange={this.handleChildStateChange}/>

                <ProgressLine total={this.state.totalNumberOfWords}
                number={this.state.totalNumberOfCompletedWords}/>

                <ResultModal resultTime={this.state.completedTyping}/>
            </div>
        )
    }
}
