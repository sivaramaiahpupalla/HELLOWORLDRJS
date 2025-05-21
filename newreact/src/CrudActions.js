// import axios from "axios";


export const Fetch_Users ="FetchUsers"
export const Add_User ="AddUser"
export const Update_User ="UpdateUser"
export const Delete_User ="DeleteUser"
export const setEdit_User ="setEditUser"
export const set_User ="setUser"



 export const FetchUsers = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    dispatch({ type: Fetch_Users, payload: data });
  };
}

    export const AddUser = (user) => {
        console.log("UserDetails", user)
        return async (dispatch) => {
        const response = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        dispatch({ type: Add_User, payload: data });
        };
    };
    
    export const UpdateUser = (user) => {
        return async (dispatch) => {
        const response = await fetch(`http://localhost:5000/users/${user.id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        dispatch({ type: Update_User, payload: data });
        };
    };
    
    export const DeleteUser = (id) => {
        return async (dispatch) => {
        await fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
        });
        dispatch({ type: Delete_User, payload: id });
        };
    };
    export const setEditUser = (user) => {
        return (dispatch) => {
        dispatch({ type:setEdit_User, payload: user });
        };
    };
    export const setUser = (user) => {
        return (dispatch) => {
        dispatch({ type: set_User, payload: user });
        };
    };


