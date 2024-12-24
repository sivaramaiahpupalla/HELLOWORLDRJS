import React,{ useState } from 'react'

const Profile = () => {

  const [input,setInput]=  useState({
         FirstName : '',
         LastName : '',
         DOB :'',
         Qualification :'',
         PassedoutYear :'',
         Percentage :''
       
    })

    // const{FirstName,LastName,DOB,Qualification,PassedoutYear,Percentage} = input
    const [submitval,setSubmitval] = useState("")



     const handlechange =(e) => {
        const {name,value} = e.target
        setInput({
            ...input,
            [name]:value })
        }
    const handleSubmit = (e) => {
            e.preventDefault();
            setSubmitval(input);
     }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>Student Profile</h1>
    <div>
        <label htmlFor="FirstName"> FirstName : </label>
        <input type="text" value={input.FirstName} name="FirstName" onChange={handlechange} />
    </div>

    <div>
        <label htmlFor="LastName"> LastName : </label>
        <input type="text" value={input.LastName}  name='LastName' onChange={handlechange} />
    </div>
    <div>
        <label htmlFor="DOB"> DOB : </label>
        <input type="text" value={input.DOB} name='DOB' onChange={handlechange} />
    </div>
    <div>
        <label htmlFor="Qualification"> Qualification : </label>
        <input type="text" value={input.Qualification} name='Qualification' onChange={handlechange} />
    </div>
    <div>
        <label htmlFor="PassedoutYear"> PassedoutYear : </label>
        <input type="text" value={input.PassedoutYear} name='PassedoutYear' onChange={handlechange} />
    </div>
    <div>
        <label htmlFor="Percentage"> Percentage : </label>
        <input type="text" value={input.Percentage} name='Percentage' onChange={handlechange} />
    </div>
    <div>
        <button >Submit</button>
    </div>
    </form>

    {
       submitval && (
        <div>
          <h1>Student Profile</h1>
          <table border='1'>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>DOB</th>
                <th>Qualification</th>
                <th>PassedoutYear</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submitval.FirstName}</td>
                <td>{submitval.LastName}</td>
                <td>{submitval.DOB}</td>
                <td>{submitval.Qualification}</td>
                <td>{submitval.PassedoutYear}</td>
                <td>{submitval.Percentage}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      
    
    </>
  )
}

export default Profile