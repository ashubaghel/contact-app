import {
  createContact,
  deleteContact,
  getContact,
  updateContact,
  getPosts,
} from "../Types/contactTypes";
const insitialState = {
  contacts: [],
  contact: null,
};

export const contactReducer = (state = insitialState, action) => {
  switch (action.type) {
    case getPosts:
      return {
        ...state,
        contacts: action.payload,
      };
    case createContact:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case getContact:
      //let data = state.contacts.find((contact) => contact.id == action.payload);
      console.log(action.payload);
      return {
        ...state,
        contact: action.payload,
      };

    case updateContact:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case deleteContact:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
