import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './assets/fontawesome/css/all.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('main-container-outer'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const Index = () => {
  return <div>Index</div>;
};
