import React from 'react'

const Fileinput1 = ({ value, handleChange }) => {
 console.log("FileInput1******", value);

  return (
    <>
    <div>
        <label>Field label 1: </label>
         <input type="text" value={value} onChange={handleChange} placeholder="Enter the Text" /> 
        
    </div>
    </>
  )
}
export default Fileinput1