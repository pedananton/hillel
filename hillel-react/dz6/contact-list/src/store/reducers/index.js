import {
    ACTION_SET_CONTACTS,
    ACTION_OPEN_MODAL,
    ACTION_CLOSE_MODAL,
    ACTION_TOGGLE,
    ACTION_CREATE_CONTACT,
} from "../actions"

const initialState = {
    contacts: [],
    formItem: null,
};

function getEmptyItem() {
    return { name: ' name', surname: ' surname', phone: ' phone' };
}

function createContact(contacts, contact) {
    return [...contacts, contact];
}

export default function (state = initialState, {type, payload} ) {
    switch (type) {
        case ACTION_TOGGLE :
            return {
                ...state,
                contacts: state.contacts.map((contact) => 
                    contact.id !== payload
                    ? contact
                    : {...contact, isToggle: !contact.isToggle }
                )
            }

        case ACTION_OPEN_MODAL:
            return {
                ...state,
                formItem: payload
                    ? state.todos.find((item) => item.id === payload)
                    : getEmptyItem(),
                log: console.log('ACTION_OPEN_MODAL', state),
            };

            case ACTION_CLOSE_MODAL:
            return {
                ...state,
                formItem: null,
            };

        case ACTION_SET_CONTACTS:
            return { ...state, contacts: payload };

        case ACTION_CREATE_CONTACT:
            return {
                ...state,
                contacts: createContact(state.contacts, payload),
            };
        
        default: 
            return state;
    }
}