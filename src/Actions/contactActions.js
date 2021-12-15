import {
  createContact,
  deleteContact,
  getContact,
  getPosts,
  updateContact,
} from "../Types/contactTypes";

import axios from "axios";
export const getPos = () => async (dispatch) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: getPosts,
    payload: result.data,
  });
};

export const add_contact = (contact) => async (dispatch) => {
  const result = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    contact
  );
  dispatch({
    type: createContact,
    payload: result.data,
  });
};

export const getCont = (id) => async (dispatch) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  dispatch({
    type: getContact,
    payload: result.data,
  });
};

export const updateCont = (contact) => async (dispatch) => {
  let id = contact.id;
  const result = await axios.patch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    contact
  );
  dispatch({
    type: updateContact,
    payload: result.data,
  });
};

export const delContact = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: deleteContact,
    payload: id,
  });
};
