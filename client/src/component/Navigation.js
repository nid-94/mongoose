import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
const Navigation = () => {
    return (
        <header>
            <Navbar bg="info" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        Welcome to mern Satck
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Pages</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;
