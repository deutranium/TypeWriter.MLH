import React, { Component } from 'react'

export default class CodeBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            line:0,
            word:0,
            textList:[]
        }
    }

    componentDidMount()
    {
        if(this.props.text.length!==0){        
            this.setState((state, props) => ({
                textList: this.props.text,
                word: this.props.completedWords,
                line:this.props.completedLine
            }));
        }
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
        //completed line and words
        let listItems="";
        for(let i=0; i<this.state.line; i++)
        {
            listItems = listItems+this.state.textList[i]+"\n";
        }

        var mistakeCode = "";
        var remainingCode = "";
        if(this.state.textList[this.state.line] !== undefined)
        {
            let tempList = this.state.textList[this.state.line].split(" ");
            
            for(let i=0; i<this.state.word; i++)
            {
                listItems = listItems+tempList[i]+" ";
            }

            mistakeCode=tempList[this.state.word]+" ";

            for(let i=this.state.word+1; i<tempList.length; i++)
            {
                remainingCode = remainingCode+tempList[i]+" ";
            }

            remainingCode=remainingCode+"\n";

            for(let i=this.state.line+1; i<this.state.textList.length; i++)
            {
                remainingCode = remainingCode+this.state.textList[i]+"\n";
            }

        }
        const CompletedCodeText = <code>{listItems}</code>

        return (
            <div>
                <div>
                    <pre>
                        <code className="completedText text-success">{CompletedCodeText}</code>
                        <code className="mistypedText text-danger">{mistakeCode}</code>
                        <code className="remainingText">{remainingCode}</code>
                    </pre>
                </div>
            </div>
        )
    }
}
