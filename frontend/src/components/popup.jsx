import React from 'react';
import { useNavigate } from 'react-router-dom';

function Popup({ trigger, setTrigger }) {
  const navigate = useNavigate();

  const handleSignupType = (type) => {
    if (type === 'C') {
      navigate('/customer-signup'); // Navigate to Customer Signup page
    } else if (type === 'L') {
      navigate('/l-signup'); // Navigate to Laundry Signup page
    } else if (type === 'D') {
      navigate('/d-signup'); // Navigate to Delivery Signup page
    }
    setTrigger(false); // Close the popup after navigation
  };

  const handleClosePopup = () => {
    setTrigger(false); // Close the popup
    navigate('/'); // Navigate to the home page
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={handleClosePopup}>Close</button>
        <h3>Signup Type</h3>
        <p>Select the type of signup:</p>
        <div className="button-group">
          <button onClick={() => handleSignupType('C')}>Customer Signup</button>
          <button onClick={() => handleSignupType('L')}>Laundry Signup</button>
          <button onClick={() => handleSignupType('D')}>Delivery Signup</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
