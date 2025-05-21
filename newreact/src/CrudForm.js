import React from 'react'

import {  useState } from 'react';
import { AddUser, UpdateUser } from './CrudActions'
import { useDispatch, useSelector } from 'react-redux';

const CrudForm = () => {
    const dispatch = useDispatch();
    const editUser = useSelector((state) => state.editUser);

    const [form, setForm] = useState({
    FirstName: '', LastName: '', DOB: '', Qualification: '', PassedoutYear: '', Percentage: ''
  });
   let { FirstName, LastName, DOB, Qualification, PassedoutYear, Percentage } = form;
   
    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form*****" , form);
    if (editUser) {
      dispatch(UpdateUser(form));
    } else {
      dispatch(AddUser(form));
    }
    setForm({
      FirstName: '', LastName: '', DOB: '', Qualification: '', PassedoutYear: '', Percentage: ''
    });
  }
  return (
    <div>
        <h1>CRUD Application</h1>
        <form>
            <div>
            <label>FirstName:</label>
            <input type="text" name="FirstName" value={FirstName} onChange={handleChange} />
            </div>
            <div>
            <label>LastName:</label>
            <input type="text" name="LastName" value={LastName} onChange={handleChange} />
            </div>
            <div>
            <label>DOB:</label>
            <input type="text" name="DOB" value={DOB} onChange={handleChange} />
            </div>
            <div>
            <label>Qualification:</label>
            <input type="text" name="Qualification" value={Qualification} onChange={handleChange}/>
            </div>
            <div>
            <label>PassedoutYear:</label>
            <input type="text" name="PassedoutYear" value={PassedoutYear} onChange={handleChange} />
            </div>
            <div>
            <label>Percentage:</label>
            <input type="text" name="Percentage" value={Percentage} onChange={handleChange} />
            </div>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CrudForm