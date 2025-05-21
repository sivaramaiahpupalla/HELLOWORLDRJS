import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteUser, FetchUsers, setEditUser } from './CrudActions';
import { useNavigate } from 'react-router-dom';



const CrudTable = () => {
  const users = useSelector((state) => state.users); // Fetch users from Redux store
  const dispatch = useDispatch();
  console.log("users", users)

  const navigate = useNavigate();

    useEffect(() => {
    console.log("useEffect called")
     dispatch(FetchUsers());
   }, [dispatch]);
    
  const handleDelete = (id) => {
    dispatch(DeleteUser(id));
  };

  const handleEdit = (id) => {
    dispatch(setEditUser(id));
    navigate(`/CrudEdit/${id}`);
    const userToEdit = users.find((user) => user.id === id);
    console.log("userToEdit", userToEdit)


  };

  return (
    <table className="tablestyle">
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>DOB</th>
          <th>Qualification</th>
          <th>PassedoutYear</th>
          <th>Percentage</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.FirstName}</td>
            <td>{user.LastName}</td>
            <td>{user.DOB}</td>
            <td>{user.Qualification}</td>
            <td>{user.PassedoutYear}</td>
            <td>{user.Percentage}</td>
            <td>
              <button onClick={() => handleEdit(user.id)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CrudTable;