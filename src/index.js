import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const getCurrentDate = () => {
    return new Date().toDateString();
}

const greetings = <h1>Hello. Today is: {getCurrentDate()}</h1>

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  greetings,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
