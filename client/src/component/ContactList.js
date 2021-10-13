import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contact";
import { Spinner, Card, Container, Row, Col } from "react-bootstrap";
import ContactCard from "./ContactCard";
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
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}>
            {load ? (
                <Spinner animation="border" />
            ) : (
                listContact.map((el) => (
                    <ContactCard contact={el} key={el._id} />
                ))
            )}
        </div>
    );
};

export default ContactList;
