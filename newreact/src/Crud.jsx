import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Crud.css';
const Crud = () => {
  const [stu, setStu] = useState({
    FirstName: '',
    LastName: '',
    DOB: '',
    Qualification: '',
    PassedoutYear: '',
    Percentage: ''
  });
  const { FirstName, LastName, DOB, Qualification, PassedoutYear, Percentage } = stu;
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const fetchData = () => {
    axios.get('http://localhost:5000/users')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStu({ ...stu, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId === null) {
      try {
        await axios.post('http://localhost:5000/users', stu);
        setStu({
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
    } else {
      handleUpdate();
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/users/${editId}`, stu);
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, ...stu } : item
      );
      setData(updatedData);
      setStu({
        FirstName: '',
        LastName: '',
        DOB: '',
        Qualification: '',
        PassedoutYear: '',
        Percentage: '',
      });
      setEditId(null);
      setIsPopupOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      alert("Are you sure you want to delete this record?");
    } catch (error) {
      console.log(error);
    }
    setData(data.filter((item) => item.id !== id));
  };
  
  const handleEdit = async (id) => {
    const rowToEdit = data.find((item) => item.id === id);
   // setStu(rowToEdit);
    setEditId(id);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setStu({
        
        FirstName: '',
        LastName: '',
        DOB: '',
        Qualification: '',
        PassedoutYear: '',
        Percentage: '',
      });
       setEditId(null);
  };
  const handlePopupOpen = () => {
     setIsPopupOpen(true);
  };


  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='FirstNameField'>
          <label htmlFor="FirstName">FirstName :</label>
          <input type="text" value={FirstName} name="FirstName" onChange={handleChange} />
        </div>
        <div className='LastNameField'>
          <label htmlFor="LastName">LastName :</label>
          <input type="text" value={LastName} name="LastName" onChange={handleChange} />
        </div>
        <div className='DOBField'>
          <label htmlFor="DOB">DOB :</label>
          <input type="text" value={DOB} name="DOB" onChange={handleChange} />
        </div>
        <div className='QualificationField'>
          <label htmlFor="Qualification">Qualification :</label>
          <input type="text" value={Qualification} name="Qualification" onChange={handleChange} />
        </div>
        <div className='PassedoutYearField'>
          <label htmlFor="PassedoutYear">PassedoutYear :</label>
          <input type="text" value={PassedoutYear} name="PassedoutYear" onChange={handleChange} />
        </div>
        <div className='PercentageField'>
          <label htmlFor="Percentage">Percentage :</label>
          <input type="text" value={Percentage} name="Percentage" onChange={handleChange} />
        </div>
        <div className='SubmitButton'>
          <button type="submit">{editId ? "Update" : "Submit"}</button>
        </div>
      </form>

      <table style={{ border: '2px solid black', borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>FirstName</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>LastName</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>DOB</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Qualification</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>PassedoutYear</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Percentage</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.FirstName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.LastName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.DOB}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.Qualification}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.PassedoutYear}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.Percentage}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <button onClick={() => handleEdit(item.id)} >edit</button>
                <span> </span>
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isPopupOpen && (
        <div className='popupclosestyle'
          
          onClick={handleClosePopup}
        >
          <div className='popupcontentstyle'
           
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Edit Student Details</h2>
            <form onSubmit={handleUpdate}>
              <div>
                <label>FirstName:</label>
                <input
                  type="text"
                  name="FirstName"
                  value={FirstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>LastName:</label>
                <input
                  type="text"
                  name="LastName"
                  value={LastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>DOB:</label>
                <input
                  type="text"
                  name="DOB"
                  value={DOB}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Qualification:</label>
                <input
                  type="text"
                  name="Qualification"
                  value={Qualification}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>PassedoutYear:</label>
                <input
                  type="text"
                  name="PassedoutYear"
                  value={PassedoutYear}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Percentage:</label>
                <input
                  type="text"
                  name="Percentage"
                  value={Percentage}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Update</button>
            </form>
            <button onClick={handleClosePopup}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Crud;
