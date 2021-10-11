import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contact";

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
            {load ? (
                <h2>spinner</h2>
            ) : (
                listContact.map((el) => <h2> {el.name}</h2>)
            )}
        </div>
    );
};

export default ContactList;
