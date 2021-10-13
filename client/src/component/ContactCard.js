import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteContact } from "./../JS/actions/contact";
const ContactCard = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <Col xs={6} md={4}>
                <Card style={{ width: "15rem" }}>
                    <Card.Body>
                        <Card.Title>Info</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {contact.name}
                        </Card.Subtitle>
                        <Card.Text>{contact.phone}</Card.Text>
                        <Card.Text>{contact.email}</Card.Text>
                    </Card.Body>
                    <Button
                        onClick={() => dispatch(deleteContact(contact._id))}>
                        DELETE
                    </Button>
                </Card>
                <br />
            </Col>
        </div>
    );
};

export default ContactCard;
