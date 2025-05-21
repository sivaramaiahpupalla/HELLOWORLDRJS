import React from 'react'

const FileInput2 = ({value,handleChange }) => {
  return (
    <>
    <div>
       <label>Field label2 : </label> 
      <input type='text' value={value} onChange={handleChange} placeholder='Enter the Text' />   
    </div>
    

    </>
  )
}

export default FileInput2