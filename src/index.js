import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import Feedback from 'components/Feedback';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App><Feedback></Feedback></App>
  </React.StrictMode>
);
