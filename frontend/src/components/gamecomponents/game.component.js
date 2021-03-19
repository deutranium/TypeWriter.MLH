import React, { Component } from 'react';
import CodeBox from './codeBox.component';
import TextBox from './textBox.component';
import ProgressLine from './progessline.component';
import Timer from './timer/timer.component';
import ResultModal from './resultModal.component';
import axios from 'axios';

export default class GamePage extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
            fullText:["Loading..."],  //contains the code snippet
            textList:[],  //contains the list of spliced texts
            position:0,  //position in the list
            currentTypeText:"",
            totalNumberOfWords:25,
            totalNumberOfCompletedWords:0,
            completedLineNumber:0,
            completedWordsInCurrentLine:0,
            startedTyping:false,
            completedTyping:false,
            time:""
        };
        this.handleChildStateChange = this.handleChildStateChange.bind(this);
        this.onTimeComplete = this.onTimeComplete.bind(this);
        this.onTimeStart = this.onTimeStart.bind(this);
    }

    async componentDidMount()
    {
        // client<->server comm0

        // get text
        fetch("http://localhost:8000/get_snippet")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    fullText: result.snippet
                });
            },
            (error) => {
                console.log(error)
                this.setState({
                    fullText: ["ERROR"],
                });
            }
        )

        //find the number of words in the text
        let tempCount = 0;
        for (let i = 0; i < this.state.fullText.length; i++) {
            let tempList = this.state.fullText[i].split(" ");
            tempCount = tempCount + tempList.length;
          }
        await this.setState((state, props) => ({
            totalNumberOfWords:tempCount
        })); 

        //generate the progress line
    }

    handleChildStateChange= async (childState)=>
    {
        let tempCount=childState.word;

        if(childState.line!=0)
        {
            tempCount = 0;
            for(let i=0; i<childState.line; i++)
            {
                let tempList = this.state.fullText[i].split(" ");
                tempCount = tempCount + tempList.length;
            }
            tempCount = tempCount + childState.word;
        }
        

        await this.setState((state, props)=>({
            totalNumberOfCompletedWords: tempCount,
            completedWordsInCurrentLine:childState.word,
            completedLineNumber:childState.line,
        }));

        if(this.state.completedLineNumber!==0 && this.state.completedLineNumber === (this.state.fullText.length))
        {
            await this.setState((state, props)=>({
                completedTyping:true
            }));
        }
    };

    onTimeComplete=async (timerValue)=>
    {
        await this.setState((state, props) => ({
            time:timerValue
        }));
        console.log("This is timer value");
        console.log(this.state.time);
    };

    onTimeStart = async (start, complete)=>
    {
        console.log("start time called");
        await this.setState((state, props)=>({
            startedTyping:start,
            completedTyping:complete
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
                    handleChildStateChange={this.handleChildStateChange}
                    startTime={this.onTimeStart}/>

                <ProgressLine total={this.state.totalNumberOfWords}
                number={this.state.totalNumberOfCompletedWords}/>

                <ResultModal total={this.state.totalNumberOfWords}
                resultTime={this.state.completedTyping}
                time={this.state.time}/>
            </div>
        )
    }
}
