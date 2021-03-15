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

        // if(this.state.line[this.state.line] == undefined)
        //     let tempList = this.state.textList[this.state.line].split(" ");
        // console.log(tempList);
        // for(let i=0; i<this.state.word; i++)
        // {
        //     listItems = listItems+tempList[i]+" ";
        // }

        const CompletedCodeText = <code>{listItems}</code>
        //wrong line/words
        const mistakeCode = ""
        //remaining line/words
        const remainingCode = ""

        return (
            <div>
                <div><pre className="completedText text-success"><code>{CompletedCodeText}</code></pre></div>
                <div><pre className="mistypedText text-warning">{mistakeCode}</pre></div>
                <div><pre className="remainingText">{remainingCode}</pre></div>
            </div>
        )
    }
}
