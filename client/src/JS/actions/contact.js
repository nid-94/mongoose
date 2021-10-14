import axios from "axios";
import {
    GET_CONTACTS,
    LOAD_CONTACTS,
    FAIL_CONTACTS,
} from "../actionTypes/contact";

// /////////////////CRUD Operations////////////////
// get
export const getContacts = () => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
        let result = await axios.get("/api/contacts");
        dispatch({ type: GET_CONTACTS, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};

//  delete
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contacts/${id}`);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
//  post
export const postContact = (newContact) => async (dispatch) => {
    try {
        await axios.post("/api/contacts/", newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
//  EDIT
export const editContact = (id, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contacts/${id}`, newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
