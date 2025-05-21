// reducers.js
import { FETCH_USERS, ADD_USER, UPDATE_USER, DELETE_USER, SET_EDIT_USER } from './actions';

const initialState = {
  users: [],
  editUser: null,
};

export const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload.user } : user
        ),
        editUser: null,
      };
    case DELETE_USER:
      return { ...state, users: state.users.filter((user) => user.id !== action.payload) };
    case SET_EDIT_USER:
      return { ...state, editUser: action.payload };
    default:
      return state;
  }
};
