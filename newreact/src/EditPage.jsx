import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEdit } from "./EditContext"; // Import useEdit

const EditPage = () => {
  const navigate = useNavigate();
  const { editData, setEditData } = useEdit(); // Get student data from context
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    DOB: "",
    Qualification: "",
    PassedoutYear: "",
    Percentage: "",
  });
  const Studentdata = async (id) => {
     await axios.get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        console.log("Fetched Data:", res.formData);
        setFormData(res.formData);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };


  
  useEffect(() => {
   Studentdata();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (Update API Call)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${editData.id}`, formData);
      console.log("Updated Data:", formData);
      setEditData(null); // Clear edit data from context
      navigate("/"); // Redirect back to TablePage
    } catch (error) {
      console.error("Error updating student data:", error);
    }
  };

  return (
    <>
      <h1>Edit Student</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>DOB:</label>
          <input
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Qualification:</label>
          <input
            type="text"
            name="Qualification"
            value={formData.Qualification}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Passed-out Year:</label>
          <input
            type="number"
            name="PassedoutYear"
            value={formData.PassedoutYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Percentage:</label>
          <input
            type="number"
            name="Percentage"
            value={formData.Percentage}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => navigate("/")}>Cancel</button>
    </>
  );
};

export default EditPage;
