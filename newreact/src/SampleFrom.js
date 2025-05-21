import React, { useState } from 'react'

import './Crud'

const SampleFrom = () => {
    const [empData, setEmpData] = useState({
        Employeename: "",
        Employeeage: "",
        Employeesalary: "",
        Designation: ""
    });

   
    const { Employeename, Employeeage, Employeesalary, Designation } = empData;

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setEmpData({ ...empData, [name]: value });  
  
    };
    const [idCard, setIdCard] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit called")
        setIdCard(true);
        console.log(empData);
    }

  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
    <div>SampleFrom</div>
    <div  className='FirstNameField'>
        <label>Employeename: </label>
        <input type="text" name="Employeename" value={Employeename} onChange={handleChange} placeholder="Enter the Employee name" />
    </div>
    <div  className='LastNameField'>
        <label>Employeeage: </label>
        <input type="text" name="Employeeage" value={Employeeage} onChange={handleChange} placeholder="Enter the Employee age" />
    </div>
    <div className='DOBField'>
        <label>Employeesalary: </label>
        <input type="text" name="Employeesalary" value={Employeesalary} onChange={handleChange} placeholder="Enter the Employee salary" />
    </div>
    <div className='QualificationField'>
        <label>Employeedesignation: </label>
        <select name='Designation' id='Designation' value={Designation} onChange={handleChange}>
            <option value="">Select Designation</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Product Manager">Product Manager</option>
            <option value="HR">HR</option>
        </select>
    </div>

    <div className='SubmitButton'>
        <button type='submit' >Submit</button>

    </div>

    
    </form>
    
    {idCard && (
        <div className='card'>
            <h2>Employee Details</h2>
            <p><strong>Employee Name:</strong> {empData.Employeename}</p>
            <p><strong>Employee Age:</strong> {empData.Employeeage}</p>
            <p><strong>Employee Salary:</strong> {empData.Employeesalary}</p>
            <p><strong>Employee Designation:</strong> {empData.Designation}</p>
        </div>
    )

    }
    </>
    
  )
}

export default SampleFrom