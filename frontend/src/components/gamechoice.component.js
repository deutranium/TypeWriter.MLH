import React, { useState, useEffect } from 'react';
import Game from './gamecomponents/game.component'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function GameChoice() {

    const [startGame, setStartGame] = useState(false)
    const [languageOption, setLanguage] = useState("")

    useEffect(() => {
        console.log(languageOption)
    }, [languageOption])


    return (
        <div>
            <p>Start Typing</p>
            {startGame?<div></div>:
            <div className="container">
                <div className="container">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select the language:</Form.Label>
                            <Form.Control as="select" onChange={(e)=>{setLanguage(e.target.value)}}>
                            <option >Javascript</option>
                            <option disabled>Python</option>
                            <option disabled>C++</option>
                            <option disabled>Java</option>
                            <option disabled>C#</option>
                            </Form.Control>
                    </Form.Group>
                    <div>
                        only JS for now :( 
                    </div>
                    <br/>
                    <Button onClick={()=>{setStartGame(true)}}>Submit</Button>
                </div>
                
            </div>}
            {startGame?<Game language={languageOption}/>:<div></div>}
        </div>
    )
}
