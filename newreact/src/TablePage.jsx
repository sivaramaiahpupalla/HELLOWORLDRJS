import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditProvider, useEdit } from "./EditContext"; 

const TablePage = () => {
  const [data, setData] = useState([]);
  const { handleEdit } = useEdit(); 
  const fetchData = () => {
    axios.get("http://localhost:5000/users")
      .then((res) => {
        console.log("Fetched Data:", res.data);
        setData(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    fetchData();
  }, []);
const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setData(data.filter((item) => item.id !== id)); 
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <EditProvider>
      <h1>Table Page</h1>
      <table border="1">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>DOB</th>
            <th>Qualification</th>
            <th>Passed-out Year</th>
            <th>Percentage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.FirstName}</td>
              <td>{item.LastName}</td>
              <td>{item.DOB}</td>
              <td>{item.Qualification}</td>
              <td>{item.PassedoutYear}</td>
              <td>{item.Percentage}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </EditProvider>
  );
};
export default TablePage;