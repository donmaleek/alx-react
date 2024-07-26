// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
import './Notifications.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

