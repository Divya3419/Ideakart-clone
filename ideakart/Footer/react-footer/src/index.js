import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import{Search} from './Components/Search';
import {PrivacyPolicy} from './Components/PrivacyPolicy';
import{RefundPolicy} from './Components/RefundPolicy';
import{EarnMoneyOnline} from './Components/MoneyOnline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/Search' element={<Search />}/>
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />}/>
          <Route path='/RefundPolicy' element={<RefundPolicy />}/>
          <Route path='/MoneyOnline' element={<EarnMoneyOnline />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
