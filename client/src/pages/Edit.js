import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../JS/actions/contact";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Edit = ({ match }) => {
    const dispatch = useDispatch();
    // useEffect(() => dispatch(editContact(match.params.id ,newContact)), [match.params]);
    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };
    console.log(newContact);
    const edit = () => dispatch(editContact(match.params.id, newContact));
    console.log(edit);

    return (
        <div>
            <h2>edit contact</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "500px",
                    paddingLeft: "500px",
                }}>
                <label htmlFor="name">name</label>
                <input
                    style={{ width: "400px", textAlign: "center" }}
                    type="text"
                    name="name"
                    value={newContact.name}
                    placeholder="enter your name"
                    onChange={handleChange}
                />
                <label htmlFor="email">email</label>
                <input
                    style={{ width: "400px", textAlign: "center" }}
                    type="text"
                    name="email"
                    value={newContact.email}
                    placeholder="enter your email"
                    onChange={handleChange}
                />
                <label htmlFor="phone">phone</label>
                <input
                    style={{
                        width: "400px",
                        textAlign: "center",
                    }}
                    type="text"
                    name="phone"
                    value={newContact.phone}
                    placeholder="enter your phone"
                    onChange={handleChange}
                />
                <Link to="/">
                    <Button onClick={() => edit()}>edit</Button>
                </Link>
            </div>
        </div>
    );
};

export default Edit;
