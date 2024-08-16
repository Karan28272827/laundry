import React from 'react';
import { useNavigate } from 'react-router-dom';

function Popup(props) {
  const navigate = useNavigate();

  const handleClose = () => {
    props.setTrigger(false); // Close the popup
    navigate('/'); // Navigate to the home page
  };

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={handleClose}>Close</button>
        {props.children}
        <div className="button-group">
          <button>C</button>
          <button>L</button>
          <button>D</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
