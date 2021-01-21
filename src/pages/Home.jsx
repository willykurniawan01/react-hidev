import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                      React Bootstrap
                 </Navbar.Brand>
            </Navbar>
            <p>
                This is Homepage
            </p>
        </div>
    )
}
