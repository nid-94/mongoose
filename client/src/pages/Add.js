import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postContact } from "../JS/actions/contact";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Add = () => {
    const dispatch = useDispatch();
    const [newContact, setNewConatct] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const handleChange = (e) => {
        setNewConatct({ ...newContact, [e.target.name]: e.target.value });
    };
    const add = () => {
        dispatch(postContact(newContact));
    };
    return (
        <div>
            <h2>Add page</h2>
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
                    <Button onClick={() => add()}>ADD</Button>
                </Link>
            </div>
        </div>
    );
};

export default Add;
