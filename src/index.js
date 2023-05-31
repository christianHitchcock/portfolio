import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/styles.scss';
import './scss/about.scss'
import './scss/contact.scss'
import './scss/project.scss'
import App from './components/app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


