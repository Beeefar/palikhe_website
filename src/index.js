import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bangsawali from './components/Bangsawali';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path ='/'  element= {<App />}/>
        <Route exact path ='/bangsawali' element= {<Bangsawali />}/>
      </Routes>
    </Router>
    <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
