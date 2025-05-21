// actions.js
import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_EDIT_USER = 'SET_EDIT_USER';

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('http://localhost:5000/users');
  dispatch({ type: FETCH_USERS, payload: res.data });
};

export const addUser = (user) => async (dispatch) => {
  const res = await axios.post('http://localhost:5000/users', user);
  dispatch({ type: ADD_USER, payload: res.data });
};

export const updateUser = (id, user) => async (dispatch) => {
  await axios.put(`http://localhost:5000/users/${id}`, user);
  dispatch({ type: UPDATE_USER, payload: { id, user } });
};

export const deleteUser = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/users/${id}`);
  dispatch({ type: DELETE_USER, payload: id });
};

export const setEditUser = (user) => ({
  type: SET_EDIT_USER,
  payload: user,
});
