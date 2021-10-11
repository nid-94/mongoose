// importation des actions
import {
    GET_CONTACTS,
    LOAD_CONTACTS,
    FAIL_CONTACTS,
} from "../actionTypes/contact";

//  initial state
const initialState = {
    listContact: [],
    error: null,
    load: false,
};
// pure function
const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_CONTACTS:
            return { ...state, load: true };

        case GET_CONTACTS:
            return { ...state, load: false, listContact: payload.listContact };

        case FAIL_CONTACTS:
            return { ...state, load: false, error: payload };

        default:
            return state;
    }
};
export default contactReducer;
