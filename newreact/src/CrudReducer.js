
import  { FetchUsers, AddUser, editUser, UpdateUser } from "./CrudActions"
 const initialState = {
  users: [],
  editUser: false,
};

const CrudReducer = (state = initialState, action) => {
    console.log("Reducer", action)
  switch (action.type) {
    case 'FetchUsers':
      return { ...state, users: action.payload };
    case 'AddUser':
      return { ...state, users: [...state.users, action.payload] };
    case 'UpdateUser':  
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        editUser: null,
      };
    case 'DeleteUser':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case 'setEditUser':
      return { ...state, editUser: true };
    default:
      return state;
  }
};

export default CrudReducer;