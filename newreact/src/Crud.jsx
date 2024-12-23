import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Crud = () => {

   
   const [stu,setStu] = useState({ 

      FirstName : '', 
      LastName : '',
      DOB : '',
      Qualification : '',
      PassedoutYear : '',
      Percentage : ''
   })
    const  {FirstName,LastName,DOB,Qualification,PassedoutYear,Percentage}= stu;
    const [data, setData]= useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/users')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
    },[stu]);
    console.log("Laks",data);
    
   //  const navigate = useNavigate();

    const handleChange = (e) => {
      const {name,value} = e.target
      setStu({...stu,[name]:value})
    }
    

    const handleSubmit = async (e) => {   
      e.preventDefault();
      console.log(stu);


     try {
      const data = await axios.post('http://localhost:5000/users', stu);
       console.log(data);
       
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
   } 
      

    
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
         <label htmlFor="FirstName">FirstName :</label>
         <input type="text"  value={FirstName} name='FirstName' onChange={handleChange}/>
      </div>
      <div>
      <label htmlFor="LastName">LastName :</label>
      <input type="text"  value={LastName} name='LastName' onChange={handleChange}/>
      </div>
      <div>
      <label htmlFor="DOB">DOB :</label>
      <input type="text"  value={DOB} name='DOB' onChange={handleChange}/>
      </div>
      <div>
      <label htmlFor="Qualification">Qualification :</label>
      <input type="text"  value={Qualification} name='Qualification' onChange={handleChange}/>
      </div>
      <div>
      <label htmlFor="PassedoutYear">PassedoutYear :</label>
      <input type="text"  value={PassedoutYear} name='PassedoutYear' onChange={handleChange}/>
      </div>
      <div>
      <label htmlFor="Percentage">Percentage :</label>
      <input type="text"  value={Percentage} name='Percentage' onChange={handleChange}/>
      </div>
      <div>
         <button>Submit</button>
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
        <td><button>edit</button> <span></span><button>delete</button></td>
      </tr>
    ))}
  </tbody>
</table>

      

    </>
  )
}

export default Crud