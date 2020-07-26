import React from 'react';
import ReactDOM from 'react-dom';
import ResetCSS from './styles/ResetCSS.styles';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
