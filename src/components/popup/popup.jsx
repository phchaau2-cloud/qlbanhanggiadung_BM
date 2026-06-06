import React, { useState } from "react";
import "./popup.css";
import PopupImage from "../../img/Popup.jpg";

function Popup() {
  const [showPopup, setShowPopup] = useState(true);

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button
          className="close-btn"
          onClick={() => setShowPopup(false)}
        >
          ✕
        </button>

        <img src={PopupImage} alt="Banner quảng cáo" />
      </div>
    </div>
  );
}

export default Popup;