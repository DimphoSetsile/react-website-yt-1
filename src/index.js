import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';


//A react root is created. injected into index.html
const root= ReactDOM.createRoot(document.getElementById('root'));

//displays an app
root.render(<App />)
