import React,{useState} from 'react'

const Variables = () => {

const [input,setInput] = useState({
  a:"",
  b:"",
});
 
const {a,b} = input;

   const [submitval,setSubmitval] = useState(false);

  const handleChangeOne = (event) => {
    setInput({...input, [event.target.name]:[event.target.value]});
      }
      

  const handlePrint = (event) => {
       setSubmitval(true) 
  }
  
  return (
    <>
    <h1> WELCOME TO THE REACTJS</h1>
    <div>
      <label htmlFor="a">Enter A value :</label>
       <input type="text" name='a'  value ={input.a} onChange={handleChangeOne}/>
    </div>
    <div>
      <label htmlFor="b">Enter B value :</label>
       <input type="text" name='b' value ={input.b} onChange ={handleChangeOne} /> 
    </div>
    <div>
      <button  onClick={handlePrint}>print</button>
    </div>
    {submitval && (<p>A value is :{input.a} and B  value is :{input.b}</p>)}
    </>
  )
}

export default Variables;