import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Login from './login.component'
import HomePage from './homepage.component'
import gamechoice from './gamechoice.component'

export default function Navigation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div className="container">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/instruction">Instruction</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Brand className = "p" href="/"> 
                        {' '}
                     {'</> '}Type-Writer{' </>'}
                     {' '}
                     </Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="ml-auto">
                            <Nav.Link href="https://github.com/deutranium/TypeWriter.MLH">About</Nav.Link>{' '}
                            <Nav.Link href="/login">Login</Nav.Link>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
