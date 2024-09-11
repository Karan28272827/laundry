import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);
