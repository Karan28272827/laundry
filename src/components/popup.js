import React from 'react';
import { useNavigate } from 'react-router-dom';


function Popup({ trigger, setTrigger }) {
  const navigate = useNavigate();

  const handleSignupType = (type) => {
    if (type === 'C') {
      navigate('/customer-signup'); // Navigate to Customer Signup page
    } else if (type === 'L') {
      navigate('/l-signup'); // Navigate to L Signup page
    } else if (type === 'D') {
      navigate('/d-signup'); // Navigate to D Signup page
    }
    setTrigger(false); // Close the popup after navigation
  };

  const handleClosePopup = () => {
    setTrigger(false); // Close the popup
    navigate('/'); // Navigate to the home page
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner" role="dialog" aria-modal="true">
        <button className="close-btn" onClick={handleClosePopup} aria-label="Close Popup">
          ✖
        </button>
        <h3>Signup Type</h3>
        <p>Select the type of signup:</p>
        <div className="button-group">
          <button onClick={() => handleSignupType('C')} className="btn">
            Customer Signup
          </button>
          <button onClick={() => handleSignupType('L')} className="btn">
            L Signup
          </button>
          <button onClick={() => handleSignupType('D')} className="btn">
            D Signup
          </button>
        </div>
      </div>
    </div>
  ) : null;
  
  
}

export default Popup;
