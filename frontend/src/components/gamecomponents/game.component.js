import React, { Component } from 'react'
import CodeBox from './gamecomponents/codeBox.component'
import TextBox from './textBox.component'

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
            totalNumberOfCompletedWords:0
        };
    }

    componentDidMount()
    {
        //get the text
        this.setState((state, props) => ({
            fullText: "if (helloWorld) { return true; } else {return false;}",
        }));

        //find the number of words in the text
        let tempList = this.state.fullText.split(" ");
        this.setState((state, props) => ({
            textList:tempList,
            totalNumberOfWords:tempList.length
        })); 

        //generate the progress line

    }

    render() {
        return (
            <div>
                <CodeBox/>
                <TextBox/>
            </div>
        )
    }
}
