import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Application = () => {
  const [data, setData] = useState({
    name: '',
    age: 0,
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: ''
  });
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/users/${editId}`, data);
        alert("Data updated successfully");
        setEditId(null);
        console.log("Data Edited......", data);
      } else {
        await axios.post('http://localhost:5000/users', data);
        alert("Data submitted successfully");
        console.log("Data Submitted......", data);
      }
      fetchData();
      setData({
        name: '',
        age: 0,
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: ''
      });
    } catch (error) {
      console.error("Error in submit:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/users');
      const res = await response.json();
      setUsers(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    const userToEdit = users.find(user => user.id === id);
    if (userToEdit) {
      setData(userToEdit);
      setEditId(id);
      console.log("User Details Matched", userToEdit);
    } else {
      console.log("User Details Not Matched");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      alert("Record deleted successfully");
      console.log(`Record with id ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

   const handlesort = () => {
    const sortedUsers1 = [...users].sort((a, b) => a.name.localeCompare(b.name));
    const sortedUsers2 = [...users].sort((a, b) => b.name.localeCompare(a.name));
    setUsers(sortedUsers1);
    setUsers(sortedUsers2);
    console.log("Data Sorted by Name", sortedUsers1);

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Application</h1>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="age">Age :</label>
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone :</label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="Enter your phone"
          />
        </div>
        <div>
          <label htmlFor="address">Address :</label>
          <input
            type="text"
            name="address"
            value={data.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label htmlFor="city">City :</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
        </div>
        <div>
          <label htmlFor="state">State :</label>
          <input
            type="text"
            name="state"
            value={data.state}
            onChange={handleChange}
            placeholder="Enter your state"
          />
        </div>
        <div>
          <label htmlFor="country">Country :</label>
          <input
            type="text"
            name="country"
            value={data.country}
            onChange={handleChange}
            placeholder="Enter your country"
          />
        </div>
        <div>
          <button type="submit">{editId ? 'Update' : 'Submit'}</button>
        </div>
      </form>

      <div>
        <table border={1} cellPadding={5} cellSpacing={0} className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th onClick={handlesort}>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.country}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                  <span> </span>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Application;
