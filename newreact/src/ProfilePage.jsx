import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    DOB: "",
    Qualification: "",
    PassedoutYear: "",
    Percentage: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    // e.preventDefault();
    // console.log("Submitted Data:", formData);
    // // Navigate to TablePage after submission
    
  
      e.preventDefault();
      
        try {
          await axios.post('http://localhost:5000/users', formData);
          setFormData({
            FirstName: '',
            LastName: '',
            DOB: '',
            Qualification: '',
            PassedoutYear: '',
            Percentage: '',
          });
        } catch (error) {
          console.log(error);
        }
        navigate("/table");
      } 
    

  return (
    <>
      <h1>Profile Page</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>-: Student Details Form :-</h2>
        <div className="FirstNameField">
          <label>FirstName:</label>
          <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange} />
        </div>
        <div className="LastNameField">
          <label>LastName:</label>
          <input type="text" name="LastName" value={formData.LastName} onChange={handleChange} />
        </div>
        <div className="DOBField">
          <label>DOB:</label>
          <input type="date" name="DOB" value={formData.DOB} onChange={handleChange} />
        </div>
        <div className="QualificationField">
          <label>Qualification:</label>
          <input type="text" name="Qualification" value={formData.Qualification} onChange={handleChange} />
        </div>
        <div className="PassedoutYearField">
          <label>Passed-out Year:</label>
          <input type="number" name="PassedoutYear" value={formData.PassedoutYear} onChange={handleChange} />
        </div>
        <div className="PercentageField">
          <label>Percentage:</label>
          <input type="number" name="Percentage" value={formData.Percentage} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ProfilePage;
