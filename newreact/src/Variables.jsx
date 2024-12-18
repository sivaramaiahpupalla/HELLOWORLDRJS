import React,{useState} from 'react'

const Variables = () => {

const [inputOne,setInputOne] = useState();
const[inputTwo, setInputTwo] = useState();

   const [submitval,setSubmitval] = useState(false)

  const handleChangeOne =(event)=>{
    setInputOne(event.target.value) 
   
      }
      const handleChangeTwo =(event)=>
      {
        setInputTwo(event.target.value)
      }

  const handlePrint =(event)=>{
    
   setSubmitval(true) 

  }
  
  return (
    <>

    <h1> WELCOME TO THE REACTJS</h1>
    <div>
      <label htmlFor="a">Enter A value :</label>
       <input type="text" id='inputOne'  value ={inputOne} onChange={handleChangeOne}/>
    </div>
    <div>
      <label htmlFor="b">Enter B value :</label>
       <input type="text" id='inputTwo' value ={inputTwo} onChange ={handleChangeTwo} /> 
    </div>
    <div>
      <button  onClick={handlePrint}>print</button>
    </div>

    {submitval && (<p>A value is :{inputOne} and B  value is :{inputTwo}</p>)}
    </>
  )
}

export default Variables