import React from 'react';
import './components/fontAwesomeIcons'
import ReactDOM from 'react-dom/client';
import './index.css';
import Movies from './components/movies'
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>
);

