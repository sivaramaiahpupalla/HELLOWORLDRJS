import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, setEditUser } from './ActionsCrud';
import { useParams, useNavigate } from 'react-router-dom';




const CrudEdit = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const editUser = useSelector((state) => state.editUser);
   const userToEdit = useSelector((state) => state.users.find(user => user.id === id)); 
   console.log("userToEdit*********", userToEdit)
   
   
   const [form, setForm] = useState({
    FirstName: '', LastName: '', DOB: '', Qualification: '', PassedoutYear: '', Percentage: ''
  });
  
  useEffect(() => {
    if (editUser) setForm(userToEdit);
  }, [editUser, userToEdit]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(updateUser(id, form));

    
    dispatch(setEditUser(false)); // Clear edit user
    navigate('/')
    
  };

  if (!editUser) return null;

  return (
    <div>
      <h2>CrudEdit</h2>
      <form onSubmit={handleSubmit}>
        <input name="FirstName" value={form.FirstName} onChange={handleChange} placeholder="First Name" />
        <input name="LastName" value={form.LastName} onChange={handleChange} placeholder="Last Name" />
        <input name="DOB" value={form.DOB} onChange={handleChange} placeholder="DOB" />
        <input name="Qualification" value={form.Qualification} onChange={handleChange} placeholder="Qualification" />
        <input name="PassedoutYear" value={form.PassedoutYear} onChange={handleChange} placeholder="Passedout Year" />
        <input name="Percentage" value={form.Percentage} onChange={handleChange} placeholder="Percentage" />
        <button type="submit">Update</button>
        <button type="button" onClick={()=>navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default CrudEdit;