import {
    GET_CONTACTS,
    LOAD_CONTACTS,
    FAIL_CONTACTS,
} from "../actionTypes/contact";

import axios from "axios";

export const getContacts = () => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
        let result = axios.get("/api/contacts");
        dispatch({ type: GET_CONTACTS, payload: (await result).data });
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
