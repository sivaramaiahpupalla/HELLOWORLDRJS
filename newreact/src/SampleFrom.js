import React, { useState } from 'react';
import './Sampleform.css'

const SampleForm = () => {
    const[users, setUsers] = useState([])
  const [empData, setEmpData] = useState({
    Employeename: "",
    Employeeage: "",
    Employeesalary: "",
    Designation: ""
  });
  console.log("users*****samplarform", users);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpData({ ...empData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    if (!empData.Employeename.trim()) {
    alert("Employee name is required");
    return;
    }

     if (isNaN(empData.Employeeage)) {
        alert("Employee age must be a number");
        return;
        }

   if(!empData.Employeesalary.trim()) {
    alert("Employee salary is required");
    return;
    }
    if (!empData.Designation.trim()) {
      alert("Employee designation is required");    
        return; 
    }   
   

    setUsers([...users, empData]);
    setEmpData({
      Employeename: "",
      Employeeage: "",
      Employeesalary: "",
      Designation: ""
    });
  };

  const getDesignationClass = (designation) => {
    switch (designation) {
      case "Software Engineer":
        return "software-engineer";
      case "Data Scientist":
        return "data-scientist";
      case "Product Manager":
        return "product-manager";
      case "HR":
        return "designation-hr";
      default:
        return "designation-default";
    }
  };

  const { Employeename, Employeeage, Employeesalary, Designation } = empData;

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        
        <div className='sample'>
            <h2>Employee Details form</h2>

        </div>
        <div className='FirstNameField'>
          <label>Employee Name:</label>
          <input className='EmployeeNameinput' type='text' name='Employeename' value={Employeename} onChange={handleChange} placeholder='Enter employee name' />
        </div>

        <div className='DOBField'>
          <label>Employee Age:</label>
          <input className='EmployeeAgeinput'    type='text' name='Employeeage' value={Employeeage} onChange={handleChange} placeholder='Enter employee age' />
        </div>

        <div className='LastNameField'>
          <label>Employee Salary:</label>
          <input className='EmployeeSalaryinput'  type='text' name='Employeesalary' value={Employeesalary} onChange={handleChange} placeholder='Enter employee salary' />
        </div>

        <div className='QualificationField'>
          <label>Employee Designation:</label>
          <select className='Designationbox' name='Designation' value={Designation} onChange={handleChange} >
            <option value="">Select Designation</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Product Manager">Product Manager</option>
            <option value="HR">HR</option>
          </select>
        </div>

        <div className='SubmitButton'>
            
          <button type='submit'>Submit</button>
        </div>
      </form>
      {users && users.map((user, index) => (
        <div key={index} className={`card ${getDesignationClass(user.Designation)}`}>
          <h2>Employee Details</h2>
          <p><strong>Employee Name:</strong> {user.Employeename}</p>
          <p><strong>Employee Age:</strong> {user.Employeeage}</p>
          <p><strong>Employee Salary:</strong> {user.Employeesalary}</p>
          <p><strong>Employee Designation:</strong> {user.Designation}</p>
        </div>
      ))}

      
    </>
  );
};

export default SampleForm;
