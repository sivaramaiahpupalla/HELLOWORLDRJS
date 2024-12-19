import React,{useState} from 'react'

const Variables = () => {

const [input,setInput] = useState({
  a:'',
  b: '',
});
 
 const {a,b} = input;

 const [submitval,setSubmitval] = useState(false);
 const [val,setVal] = useState('')
 const [msg,setMsg] = useState('')
 const [ cal, setCal] = useState()

 const handleChangeOne = (event) => {
   setInput({...input, [event.target.name]:[event.target.value]});
 }
   const handlePrint = (event) => {
       setSubmitval(true); 
   }
   const handleAdd = () => {
    
    setCal(parseFloat(a)+ parseFloat(b));
    setVal('ADD')
       }
    const handleSub = (event) => {
      setVal('SUB');
      if(parseFloat(b)<parseFloat(a))
      {
              setCal(parseFloat(a)-parseFloat(b));
      }
      else {
              setMsg("Wrong inputs");
      }
       
   }
      const handleMul = (event) => {
        setVal('MUL')  
        setCal(parseFloat(a)*parseFloat(b))
    }
    const handleDiv = (event) => {
        setVal('DIV') 
        setCal(parseFloat(a)/parseFloat(b))
     
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
      <button  onClick={handleAdd}>ADD</button>
      <button  onClick={handleSub}>SUB</button>
      <button  onClick={handleMul}>MUL</button>
      <button  onClick={handleDiv}>DIV</button>
    </div>
    {submitval && (<p>A value is :{input.a} and B  value is :{input.b}</p>)}
    {val === 'ADD' && <p>Result for Addition= {cal}</p> }
    {val === 'SUB' && msg ? msg : <p>Result for Subtraction= {cal}</p> }
    {val === 'MUL' && <p>Result for Multiplication= {cal}</p> }
    {val === 'DIV' && <p>Result for Division= {cal}</p> }
  </>
  )
}

export default Variables;