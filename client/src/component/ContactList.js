import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contact";
import { Spinner, Card, Container, Row, Col } from "react-bootstrap";
const ContactList = () => {
    const dispatch = useDispatch();
    const listContact = useSelector(
        (state) => state.contactReducer.listContact
    );
    const load = useSelector((state) => state.contactReducer.load);
    useEffect(() => {
        dispatch(getContacts());
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    {load ? (
                        <Spinner animation="border" />
                    ) : (
                        listContact.map((el) => (
                            <Col xs={6} md={4}>
                                <Card style={{ width: "15rem" }}>
                                    <Card.Body>
                                        <Card.Title>Info</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {el.name}
                                        </Card.Subtitle>
                                        <Card.Text>{el.phone}</Card.Text>
                                        <Card.Text>{el.email}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default ContactList;
