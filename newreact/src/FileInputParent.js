import React, { useState } from 'react'
import FileInput2 from './FileInput2';
import FileInput1 from './Fileinput1';

const FileInputParent = () => {
     const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    console.log("handlechanged called")
    setInputValue(e.target.value);
  };

  return (
      <div>
        <FileInput1 value={inputValue} handleChange={handleChange} />
        <span>   </span>
        <FileInput2 value={inputValue} handleChange={handleChange} />

    </div>
);
    
  
}

export default FileInputParent