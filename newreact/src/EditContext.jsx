import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Create Context
const EditContext = createContext();

// Provider Component
export const EditProvider = ({ children }) => {
  const navigate = useNavigate();

  // Function to navigate to Edit Page
  const handleEdit = (user) => {
    navigate("/edit", { state: user });
  };

  return (
    <EditContext.Provider value={{ handleEdit }}>
      {children}
    </EditContext.Provider>
  );
};

// Custom Hook to use the context
export const useEdit = () => useContext(EditContext);