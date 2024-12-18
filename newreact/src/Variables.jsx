import React, { useState } from 'react'

const Variables = () => {

  let [value,setValue] = useState({})



  let [submittedvalues,setSubmittedvalues] = useState({})


  let handlechange = (event) =>
  {

    const { name, value } = event.target;
    setValue({ ...value, [name]: value });
    //setValue(event.target.value)
  }

  let handlesubmit = (event)=>{
    console.log(event);
    setSubmittedvalues(value)
  }
    
    <h3> {value} </h3>
  
   return (
    <>
    <h1> Welcome to the react js</h1>
    <div>
        <label htmlFor="">Enter a value</label>
        <input type="text"  onChange ={handlechange}/>
    </div>
    <div>
        <label htmlFor="">Enter b value : </label>
        <input type="text"  onChange ={handlechange}/>
    </div>
    <div>
        <button onClick ={handlesubmit}>print</button>
    </div>


    </>
  )
}

export default Variables