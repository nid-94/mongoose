import React from "react";
import ContactList from "../component/ContactList";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <Link to="/add">
                <Button>ADD</Button>
            </Link>
            <ContactList />
        </div>
    );
};

export default Home;
