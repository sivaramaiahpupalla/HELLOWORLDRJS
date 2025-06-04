import React, {useState,useRef} from 'react'
import axios from 'axios';

const EmployeesDetailsJson = () => {
  const [employee, setEmployee] = useState({
    EmployeeId: "",
    EmployeeName: "",
    EmployeeBloodGroup: "",
    Designation: ""
  });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  }
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setEmployee({ ...employee, photoURL: url });
    }
  }

  const handleSubmit =  (e) => {

  axios.post('http://localhost:5000/users', employee)
    .then(response => {
      console.log("Data submitted successfully:", response.data);
    })

    e.preventDefault();
    console.log("Employee Details:", employee);
    setEmployee({
      EmployeeId: "",
      EmployeeName: "",
      EmployeeBloodGroup: "",
      Designation: ""
    });
    
    fileInputRef.current.value = '';
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='file'>
                  <label htmlFor="file">Upload File</label>
                  <input type='file' className='fileinputfield' name='file' ref={fileInputRef} id='file' accept='image/*' onChange={handlePhoto} />
                    </div>
        <div>
          <label>EmployeeName:</label>
          <input
            type="text"
            name="EmployeeName"
            value={employee.EmployeeName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>EmployeeId:</label>
          <input
            type="text"
            name="EmployeeId"
            value={employee.EmployeeId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>EmployeeBloodGroup:</label>
          <input
            type="text"
            name="EmployeeBloodGroup"
            value={employee.EmployeeBloodGroup}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Designation:</label>
          <input
            type="text"
            name="Designation"
            value={employee.Designation}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        
      </form>
      {/* You can use the employee state here */}
    </>
  );
}

export default EmployeesDetailsJson
