import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';

import App from './App';
import ForgotPasswordPage from './Components/ForgotPasswordPage';

import './index.css';
import "bootstrap/dist/css/bootstrap.css";


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
        {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul> */}

        <Route path="/" component={App} />
        {/* <Route path="/faq" render={()=><ForgotPasswordPage />} /> */}
        {/* <Route path="/widgets" component={Widgets} /> */}
        </div>
    </Router>,
   document.getElementById('root'));
registerServiceWorker();
