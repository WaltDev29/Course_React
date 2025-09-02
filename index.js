import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialogs from './chp04/ConfirmDialogs'
import Clock from './chp04/Clock'

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <React.StrictMode>
            <Clock/>
            <ConfirmDialogs/>
        </React.StrictMode>
    );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
