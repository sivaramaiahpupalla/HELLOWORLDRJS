import React, { useState } from "react";

const PopupExample = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>

      {isPopupOpen && (
        <div
        //   style={{
        //     position: "fixed",
        //     top: 0,
        //     left: 0,
        //     width: "100%",
        //     height: "100%",
        //     backgroundColor: "rgba(0, 0, 0, 0.5)",
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     zIndex: 1000,
        //   }}
          onClick={closePopup}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Popup Content</h2>
            <p>This is an example of a popup in React.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupExample;
