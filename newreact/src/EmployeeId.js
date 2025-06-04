import React, { useState } from 'react'
import './EmployeeId.css'

const EmployeeId = () => {
    const [empId, setEmpId] = useState({
        EmployeeId: "",
        EmployeeName: "",
        EmployeeBloodGroup: "",
        Designation: ""
    })
    const [empIdData, setEmpIdData] = useState([])
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpId({ ...empId, [name]: value });
    }

    const handlePhoto = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
            const url = URL.createObjectURL(file);
            setPhotoURL(url);
        }
    }
    const getdesignation = (designation) => {
        switch (designation) {
            case "Software Engineer":
                return "software-engineer";
            case "Project Manager":
                return "project-manager";
            case "HR Manager":
                return "hr-manager";
            case "Data Analyst":
                return "data-analyst";
            case "UI/UX Designer":
                return "uiux-designer";
            default:
                return "";
        }
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmpIdData([...empIdData, { ...empId, photoURL }]);
        setEmpId({
            EmployeeId: "",
            EmployeeName: "",
            EmployeeBloodGroup: "",
            Designation: ""
        });
        setPhoto(null);
        setPhotoURL(null);
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='head'>Employee Id</h1>
                <div className='sample'>
                    <div className='file'>
                        <label htmlFor="file">Upload File</label>
                        <input type='file' className='fileinputfield' name='file' id='file' accept='image/*' onChange={handlePhoto} />
                    </div>
                    <div className='EmployeeId'>
                        <label htmlFor="EmployeeId">Employee Id</label>
                        <input type="text" className='EmployeeIdinputfield' name='EmployeeId' id='EmployeeId' value={empId.EmployeeId} onChange={handleChange} />
                    </div>
                    <div className='EmployeeName'>
                        <label htmlFor="EmployeeName">Employee Name</label>
                        <input type="text" className='EmployeeNameinputfield' name='EmployeeName' id='EmployeeName' value={empId.EmployeeName} onChange={handleChange} />
                    </div>
                    <div className='EmployeeBloodGroup'>
                        <label htmlFor="EmployeeBloodGroup">Employee Blood Group</label>
                        <input type="text" className='EmployeeBloodGroupinputfield' name='EmployeeBloodGroup' id='EmployeeBloodGroup' value={empId.EmployeeBloodGroup} onChange={handleChange} />
                    </div>
                    <div className='Designation'>
                        <label htmlFor="Designation">Designation</label>
                        <select className='Designationinputfield' name='Designation' id='Designation' value={empId.Designation} onChange={handleChange}>
                            <option value="">Select Designation</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Project Manager">Project Manager</option>
                            <option value="HR Manager">HR Manager</option>
                            <option value="Data Analyst">Data Analyst</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                        </select>
                    </div>
                    <div className='submit'>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
            <div className='display'>
                {empIdData.map((data, index) => (
                    <div key={index} className={`card ${getdesignation(data.Designation)}`}>
                        <h2>Employee Id</h2>
                        {data.photoURL && (
                            <div className='image'>
                            <img src={data.photoURL} alt="Employee"   />
                            </div>
                        )}
                        <p>Employee Id: {data.EmployeeId}</p>
                        <p>Employee Name: {data.EmployeeName}</p>
                        <p>Employee Blood Group: {data.EmployeeBloodGroup}</p>
                        <p>Designation: {data.Designation}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EmployeeId

// style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: '8px' }}