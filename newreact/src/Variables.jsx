import React,{useState} from 'react'

const Variables = () => {

const [input,setInput] = useState({
  a:"",
  b:"",
});
 
 const {a,b} = input;

 const [submitval,setSubmitval] = useState(false);
 const [inputone,setInputone] = useState(false);
 const [inputtwo,setInputTwo] = useState(false);
 const [inputthree,setInputThree] = useState(false);
 const [inputfour,setInputFour] = useState(false);

 const handleChangeOne = (event) => {
   setInput({...input, [event.target.name]:[event.target.value]});
 }
      

  const handlePrint = (event) => {
       setSubmitval(true); 
   }
   const handleAdd = (event) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    const r1 = num1+num2;
      setInputone(r1) 
    }
    
  

   const handleSub = (event) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    const r2 = num1-num2;
      if(num2>num1)
      {
        setInputTwo(r2);
      }
      else {
        console.log("Wrong inputs");
        
      }
       
   }

    const handleMul = (event) => {
      const num1 = parseFloat(a);
      const num2 = parseFloat(b);
      const r3 = num1*num2;
        setInputThree(r3)  
    }
    const handleDiv = (event) => {
      const num1 = parseFloat(a);
      const num2 = parseFloat(b);
      const r4 = num1/num2;
        setInputFour(r4) 
     
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
    {inputone && (<p>result:{input.a}+{input.b}={handleAdd}</p>)}
    {inputtwo && (<p>result:{input.a}-{input.b}</p>)}
    {inputthree && (<p>result:{input.a}*{input.b}</p>)}
    {inputthree && (<p>result:{input.a}/{input.b}</p>)}
    </>
  )
}

export default Variables;