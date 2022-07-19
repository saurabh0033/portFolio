import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container className='navbar'>

                    <Navbar.Brand className='logo'><a href="#">Portfo<span>lio.</span></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto menu" style={{ maxHeight: '200px' }} navbarScroll >
                            <Nav.Link href="#Home"><a>Home</a></Nav.Link>
                            <Nav.Link href="#About Me"><a>About Me</a></Nav.Link>
                            <Nav.Link href="#Skills"><a>Skills</a></Nav.Link>
                            <Nav.Link href="#Projects"><a>Projects</a></Nav.Link>
                            <Nav.Link href="#Contact Me"><a>Contact Me</a></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
