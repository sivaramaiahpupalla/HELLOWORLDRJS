import React,{useState} from 'react'

const Variables = () => {

  let [input,setInput] = useState({
     a:"",
     b:"",
  })

   let [submitval,setSubmitval] = useState(false)

  let handlechange =(event)=>{
        
        setInput(event.target.value)
        
         
    }

  let handleprint =(event)=>{
    
   setSubmitval(event.target.value) 

  }
  
  return (
    <>

    <h1> WELCOME TO THE REACTJS</h1>
    <div>
      <label htmlFor="a">Enter A value :</label>
       <input type="text" id='a'  value ={input.a} onChange={handlechange}/>
    </div>
    <div>
      <label htmlFor="b">Enter B value :</label>
      <input type="text" id='b' value ={input.b} onChange ={handlechange} />
    </div>
    <div>
      <button  onClick={handleprint}>print</button>
    </div>

    {setSubmitval && <p>A value is :{submitval.a} and B : value is {submitval.b}</p>}
    </>
  )
}

export default Variables