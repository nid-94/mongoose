import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
const Navigation = () => {
    return (
        <header>
            <Navbar bg="info" variant="light">
                <Container>
                    <Navbar.Brand>Welcome to mern Satck Workshop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#pages">Pages</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;
