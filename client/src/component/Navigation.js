import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <header>
            <Navbar bg="info" variant="light">
                <Container>
                    <Navbar.Brand>Welcome to mern Satck Workshop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="pages" id="navbarScrollingDropdown">
                            <Link to="/add">
                                <NavDropdown.Item href="#action3">
                                    ADD
                                </NavDropdown.Item>
                            </Link>
                            <NavDropdown.Item href="#action4">
                                EDIT
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;
