import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // removed strctmode because it invoking useEffect 2 times at first render but its only in develoment
    <App />

);

reportWebVitals();
