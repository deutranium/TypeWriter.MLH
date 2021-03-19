import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Homepage() {
    return (
        <div className="container" style={{paddingTop:'50px'}}>
            <Jumbotron style={{backgroundColor:'white'}}>
                <h1>Hello, world!</h1>
                <p>
                    Type-Writer is an application to test your coding speed.
                    </p><p>
                    Check your coding speed for random code snippets in a variety of languages.
                </p>
                <p>
                    <Button variant="primary" onClick={()=>{window.location.href="/game"}}>Let's Type</Button>
                </p>
            </Jumbotron>
        </div>
    )
}
