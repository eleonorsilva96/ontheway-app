// src/js/actions/index.js
import { ADD_USER, FETCH_USERS } from "../constants/action-types";
export const addUser = user => ({ type: ADD_USER, payload: user });

export const fetchUsers = () => ({type: FETCH_USERS});
