import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMoney,withdraw }   from './Actions'

const Forms = () => {

  const [amount, setAmount] = useState("")
  const [fullName,setFullName] = useState("")
  const [mobile,setMobile] = useState("")
  const [accountNumber,setAccountNumber] = useState("")
  const [transactionId,setTransactionID] = useState(0)

  let dispatch= useDispatch()
  return (
    <div>
      <h2>Form</h2>
      <div>
      <input type="number" placeholder="Enter amount" value={amount}  onChange={(e)=> {
      let data= e.target.value;
      setAmount(data)}
       } /> 
         <button onClick={()=> {
          dispatch(addMoney(amount))
          setTransactionID(transactionId+1)
          dispatch({type:"ADD_Transaction", payload:
          {id:transactionId , amount : amount, type: "CREDIT", date: new Date().toLocaleString()}})
          setAmount("");
          
        }
        }>Add Money</button>
        <span> </span>
        <button onClick={()=> {
          dispatch(withdraw(amount))
          setTransactionID(transactionId+1);
          dispatch({type:"ADD_Transaction", payload:
            {  id:transactionId ,amount : amount, type: "DEBIT", date: new Date().toLocaleString()}})
            setAmount("");
        }
      }
        >Withdraw</button>
    </div>

   <div>
    <input type="text" placeholder="Enter Name" onChange={(e)=> {
      let name=e.target.value;
      setFullName(name)}
       } />
        <span> </span> 
      <button onClick={()=> {
          dispatch({type:"SET_NAME", payload: fullName})
        }}>
       Set Name
     </button>
   </div>
    <div>
    <input type="number" placeholder="Enter Mobile Number" onChange={(e)=> {
      let mobileNumber=e.target.value;
      setMobile(mobileNumber)}
       } />
        <span> </span>
<button onClick={()=> {
          dispatch({type:"SET_MOBILE", payload: mobile})
        }
        }>Set Mobile</button>

      </div>
      <div>
    <input type="number" placeholder="Enter Account Number" onChange={(e)=> {
      let accountNumber=e.target.value;
      setAccountNumber(accountNumber)}
       } />
        <span> </span>  
<button onClick={()=> {
          dispatch({type:"ACCOUNT_NUMBER", payload: accountNumber})
        }
        }>Set Account Number</button>
        </div>
  </div>
  )
} 

export default Forms